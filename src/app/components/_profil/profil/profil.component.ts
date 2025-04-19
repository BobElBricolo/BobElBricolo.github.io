import { Component, computed, inject, NgModule, OnInit, signal, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule, DatePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { ApiCallsService } from '../../../_services/service_api_call/api-calls.service';
import { AuthentificationService } from '../../../_services/authentification/authentification.service';
import { User, UserName } from '../../../_models/UserInfo';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

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
    MatTabsModule,
    CommonModule,
    TranslatePipe,
  ],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  getTournamentTitle(tournament: any): string {
    const lang = this.translate.currentLang;
    return tournament.title?.[lang] || tournament.title?.['en'];
  }

  getBadgeTitle(badge: any): string {
    const lang = this.translate.currentLang;
    return badge.title?.[lang] || badge.title?.['en'];
  }
  
  apiCallsService = inject(ApiCallsService);
  authentificationService = inject(AuthentificationService);
  snackBar = inject(MatSnackBar);

  profilInfo = signal<User | null>(null);
  profileInfoCopyToEdit = new User('', '', '', '', false, "", "");
  isEditing = signal(false);
  isLoading = signal(false);

  connectedUser = this.authentificationService.getUser();
  isProfileOwner = computed(() => this.connectedUser.id === this.profilInfo()?.id);

  previewImage: string | null = null;

  searchQuery = signal<string>('');
  allUsers = signal<UserName[]>([]);

  filteredUsers = computed(() => {
    return this.allUsers().filter(user => user.username.toLowerCase().includes(this.searchQuery().toLowerCase()));
  });

  ngOnInit(): void {
    this.isLoading.set(true);

    this.apiCallsService.getProfileInfo(this.connectedUser.id).subscribe({
      next: (data: User) => {
        this.profilInfo.set(data);
        this.profileInfoCopyToEdit = { ...data };
        this.isLoading.set(false);
      },
      error: (err: any) => {
        console.error('Erreur lors de la récupération du profil:', err);
        this.isLoading.set(false);
      }
    });

    this.apiCallsService.getAllProfileNames().subscribe({
      next: (data: UserName[]) => {
        this.allUsers.set(data);
      },
      error: (err) => console.error('Erreur utilisateurs:', err)
    });
  }


  selectUser(user: UserName): void {
    this.isLoading.set(true);
    this.isEditing.set(false);
    this.apiCallsService.getProfileInfo(user.id).subscribe({
      next: (data: User) => {
        this.profilInfo.set(data);
        this.profileInfoCopyToEdit = { ...data };
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération du profil:', err);
        this.isLoading.set(false);
      }
    });

    this.searchQuery.set('');
  }

  displayUser(user: UserName): string {
    return user ? `${user.username}` : '';
  }

  cancelEdit(): void {
    this.isEditing.set(false);
    this.profileInfoCopyToEdit = { ...this.profilInfo() as User };
  }


  editProfile(): void {
    if (!this.profilInfo() || this.isEditing() || !this.isProfileOwner()) {
      return;
    }
    this.profileInfoCopyToEdit = { ...this.profilInfo() as User };
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

  tournaments = [
    {
      title: {
        en: 'League of Legends Tournament',
        fr: 'Tournoi de League of Legends'
      },
      
      game: 'Valorant',
      date: 'February 12, 2025',
      link: '#',
      image: 'assets/_videoGames/Warzone.jpg',
      index: 2,
    },
    {
      title: {
        en: 'CSGO Tournament',
        fr: 'Tournoi de CSGO'
      },
      game: 'CSGO',
      date: 'January 15, 2025',
      link: '#',
      image: 'assets/_videoGames/csgo.png',
      index: 4,
    },
    {
      title: {
        en: 'League of Legends Cup',
        fr: 'Coupe de League of Legends'
      },
      game: 'LoL',
      date: 'April 20, 2024',
      link: '#',
      image: 'assets/_videoGames/LOL.jpg',
      index: 3,
    },
    {
      title: {
        en: 'Civilization 5 Tournament',
        fr: 'Tournoi de Civilization 5'
      },
      game: 'Civilization 5',
      date: 'April 12, 2023',
      link: '#',
      image: 'assets/_videoGames/civilization5.png',
      index: 1,
    }
  ];

  badges = [
    {
      image: 'assets/badges/badge1_v2.png',
      title: {
        en: 'Participate in your first tournament',
        fr: 'Participer a son premier tournoi'
      }
    },
    {
      image: 'assets/badges/badge2.png',
      title: {
        en: 'Win your first dollar',
        fr: 'Gagner son premier dollar'
      }
    },
    {
      image: 'assets/badges/badge2.png',
      title: {
        en: 'Win your first tournament',
        fr: 'Gagner son premier tournoi'
      }
    }
  ]

  getMedalIcon(position: number): string {
    switch (position) {
      case 1: return '🥇'; // Médaille d'or
      case 2: return '🥈'; // Médaille d'argent
      case 3: return '🥉'; // Médaille de bronze
      default: return '🏅'; // Médaille générique pour les autres positions
    }
  }

  logout() {
    this.authentificationService.logout();
  }
}
