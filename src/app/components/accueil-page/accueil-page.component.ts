import {Component} from '@angular/core';
import {AccueilComponent} from '../accueil/accueil.component';
import {ActualityComponent} from '../actuality/actuality.component';
import {NextTournamentComponent} from '../next-tournament/next-tournament.component';

@Component({
  selector: 'app-accueil-page',
  imports: [
    AccueilComponent,
    ActualityComponent,
    NextTournamentComponent
  ],
  templateUrl: './accueil-page.component.html',
  styleUrl: './accueil-page.component.css'
})
export class AccueilPageComponent {
}
