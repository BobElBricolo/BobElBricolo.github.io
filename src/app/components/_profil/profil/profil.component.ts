import { Component, computed, inject, NgModule, OnInit, signal, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DatePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { ApiCallsService } from '../../../_services/service_api_call/api-calls.service';
import { AuthentificationService } from '../../../_services/authentification/authentification.service';
import { ProfilInfo } from '../../../_models/ProfilInfo';


@Component({
  selector: 'app-profil',
  imports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    DatePipe,
  ],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit {

  apiCallsService = inject(ApiCallsService);
  authentificationService = inject(AuthentificationService);
  snackBar = inject(MatSnackBar);

  profilInfo = signal<ProfilInfo | null>(null);
  profileInfoCopyToEdit = new ProfilInfo('', '', '', '', '');
  isEditing = signal(false);
  isLoading = signal(false);
  
  connectedUser = this.authentificationService.getUser();
  isProfileOwner = computed(() => this.connectedUser.id === this.profilInfo()?.id);

  previewImage: string | null = null;

  ngOnInit(): void {
    this.isLoading.set(true);

    this.apiCallsService.getProfileInfo(this.connectedUser.id).subscribe({
      next: (data: ProfilInfo) => {
        this.profilInfo.set(data);
        this.profileInfoCopyToEdit = { ...data };
        this.isLoading.set(false);
      },
      error: (err: any) => {
        console.error('Erreur lors de la récupération du profil:', err);
        this.isLoading.set(false);
      }
    });
  }

  cancelEdit(): void {
    this.isEditing.set(false);
    this.profileInfoCopyToEdit = { ...this.profilInfo() as ProfilInfo };
  }


  editProfile(): void {
    if (!this.profilInfo() || this.isEditing() || !this.isProfileOwner()) {
      return;
    }
    this.profileInfoCopyToEdit = { ...this.profilInfo() as ProfilInfo };
    this.isEditing.set(true);
  }

  saveProfile(): void {
    if (!this.profileInfoCopyToEdit || !this.isProfileOwner()) {
      return;
    }
    this.profilInfo.set({ ...this.profileInfoCopyToEdit });
    this.isEditing.set(false);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type === 'image/png') {
        const reader = new FileReader();
        reader.onload = () => {
          this.previewImage = reader.result as string;
          this.profileInfoCopyToEdit.profileImage = this.previewImage;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Seules les images PNG sont acceptées.');
      }
    }
  }

}
