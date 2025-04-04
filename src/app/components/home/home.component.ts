import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {TournamentCard} from '../../_models/TournamentCard';
import {TournamentCardComponent} from '../tournament-card/tournament-card.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    MatButton,
    TournamentCardComponent,
    SlickCarouselModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tournois: TournamentCard[] = [
    {
      tournamentName: 'Rocket League Open',
      tournamentDate: '5 avril 2025',
      tournamentLocation: 'En ligne',
      tournamentDescription: 'Tournoi 2v2 ouvert à tous, cash prize à gagner!',
      tournamentImage: 'assets/_videoGames/Warzone.jpg'
    },
    {
      tournamentName: 'Rocket League Open',
      tournamentDate: '5 avril 2025',
      tournamentLocation: 'En ligne',
      tournamentDescription: 'Tournoi 2v2 ouvert à tous, cash prize à gagner!',
      tournamentImage: 'assets/_videoGames/Warzone.jpg'
    },
    // autres tournois...
  ];
}
