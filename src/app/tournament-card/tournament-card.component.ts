import {Component, input} from '@angular/core';
import {TournamentCard} from '../_models/TournamentCard';

@Component({
  selector: 'app-tournament-card',
  imports: [],
  templateUrl: './tournament-card.component.html',
  styleUrl: './tournament-card.component.css'
})
export class TournamentCardComponent {

  tournament = input.required<TournamentCard>();

  // On init, print the tournament name
  ngOnInit() {
    console.log(this.tournament().tournamentName);
  }
}
