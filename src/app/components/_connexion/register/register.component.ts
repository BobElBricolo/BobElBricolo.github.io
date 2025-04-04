import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../../_services/authentification/authentification.service';
import { UserToConnect, UserToRegister } from '../../../_models/UserInfo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  imports:
    [
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      NgOptimizedImage

    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private readonly router = inject(Router);

  protected user: UserToRegister = new UserToRegister("", "", "");

  private readonly authenticationService = inject(AuthentificationService);
  private readonly fb = inject(FormBuilder);
  private readonly snackBar = inject(MatSnackBar);

  signupForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email,]],
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  }, { validators: this.passwordsMatchValidator });

  protected onLogin() {
    this.router.navigate(['/login']);
  }

  protected onRegister(): void {
    if (this.signupForm.valid) {
      const formValue = this.signupForm.value;

      const userToSend: UserToRegister = new UserToRegister(
        formValue.username,
        formValue.email,
        formValue.password
      );

      this.authenticationService.registerUser(userToSend).subscribe(success => {
        if (success) {
          this.snackBar.open('Inscription réussie.', 'Fermer', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
          this.router.navigate(['/home']);
        } else {
          this.snackBar.open('Échec de l\'inscription.', 'Fermer', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
          console.log('Échec de la connexion.');
        }
      });
    }
  }

  passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    console.log("Validatation")
    const passwordControl = group.get('password');
    const confirmControl = group.get('confirmPassword');

    if (!passwordControl || !confirmControl) return null;

    const password = passwordControl.value;
    const confirm = confirmControl.value;

    if (!confirm) {
      confirmControl.setErrors(confirmControl.hasError('required') ? { required: true } : null);
      return null;
    }

    if (password !== confirm) {
      confirmControl.setErrors({ passwordsMismatch: true });
      return { passwordsMismatch: true };
    } else {
      if (confirmControl.hasError('passwordsMismatch')) {
        confirmControl.setErrors(null);
      }
      return null;
    }
  }

}
