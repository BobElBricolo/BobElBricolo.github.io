import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports:
    [
      MatCardModule,
      CommonModule,
      NgOptimizedImage
    ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  private readonly router = inject(Router);


  protected onLogin() {
    this.router.navigate(['/login']);
  }


}
