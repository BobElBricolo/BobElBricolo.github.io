import { Component, inject, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthentificationService } from '../../_services/authentification/authentification.service';
import { ApiCallsService } from '../../_services/service_api_call/api-calls.service';
import { User } from '../../_models/UserInfo';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
    RouterLink,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    TranslatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private readonly router = inject(Router);
  apiCallsService = inject(ApiCallsService);
  authentificationService = inject(AuthentificationService);

  connectedUser = this.authentificationService.getUser();

  protected onProfil() {
    if (this.authentificationService.isNotLogggedIn()) {
      this.router.navigate(['/login']);
    }
    else {
      this.router.navigate(['/profil']);
    }
  }

  isNotLogggedIn(): boolean {
    return this.authentificationService.isNotLogggedIn();
  }
}
