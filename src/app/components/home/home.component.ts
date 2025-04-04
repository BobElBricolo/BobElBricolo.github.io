import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {TournamentCard} from '../../_models/TournamentCard';
import {TournamentCardComponent} from '../tournament-card/tournament-card.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    MatButton,
    TournamentCardComponent,
    SlickCarouselModule,
    TranslatePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tournois: TournamentCard[] = [
    {
      tournamentName: 'HOME.TS.TOURNAMENT-NAME-RL',
      tournamentDate: 'HOME.TS.TOURNAMENT-DATE-RL',
      tournamentLocation: 'HOME.TS.TOURNAMENT-LOCATION-RL',
      tournamentDescription: 'HOME.TS.TOURNAMENT-DESCRIPTION-RL',
      tournamentImage: 'assets/_videoGames/Warzone.jpg'
    },
    {
      tournamentName: 'HOME.TS.TOURNAMENT-NAME-WZ',
      tournamentDate: 'HOME.TS.TOURNAMENT-DATE-WZ',
      tournamentLocation: 'HOME.TS.TOURNAMENT-LOCATION-WZ',
      tournamentDescription: 'HOME.TS.TOURNAMENT-DESCRIPTION-WZ',
      tournamentImage: 'assets/_videoGames/Warzone.jpg'
    },
    // autres tournois...
  ];
}
