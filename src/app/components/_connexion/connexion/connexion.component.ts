import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../../_services/authentification/authentification.service';
import { UserToConnect } from '../../../_models/UserInfo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-connexion',
  imports:
    [
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      NgOptimizedImage,
    ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  private readonly authenticationService = inject(AuthentificationService);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  protected user: UserToConnect = new UserToConnect("", "");

  protected onLogin() {
    this.authenticationService.loginUser(this.user).subscribe((success) => {
      if (success) {
        this.router.navigate(['/profil']);
      } else {
        this.snackBar.open('Informations erronées', 'Fermer', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        this.user.password = '';
      }
    });
  }

  protected onRegister() {
    this.router.navigate(['/register']);
  }

  protected onForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

}
