import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../_services/authentification/authentification.service';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-accueil',
  imports: [TranslatePipe],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  private readonly router = inject(Router);
  private readonly authentificationService = inject(AuthentificationService);

  //Function to go to /profil
  goToProfil() {
    if(this.authentificationService.isNotLogggedIn()) {
      this.router.navigate(['/login']);
    }
    else {
      this.router.navigate(['/profil']);
    }
  }

  //Function to go to /register
  goToTournaments() {
    this.router.navigate(['/tournaments']);
  }
}
