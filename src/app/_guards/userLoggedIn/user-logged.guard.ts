import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivateFn, Router } from '@angular/router';
import { AuthentificationService } from '../../_services/authentification/authentification.service';

export const userLoggedGuard: CanActivateFn = () => {
  const authService = inject(AuthentificationService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);
  
  const user = authService.getUser();

  if (user) {
    return true;
  } else {
    console.log("Return home")
    router.navigate(['/home']);
    snackBar.open('Vous devez être connecté pour accéder à cette page.', 'Fermer', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });    
    return false;
  }
};
