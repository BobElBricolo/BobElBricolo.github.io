import {Component, input} from '@angular/core';
import {TournamentCard} from '../../_models/TournamentCard';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-tournament-card',
  imports: [
    TranslatePipe
  ],
  templateUrl: './tournament-card.component.html',
  styleUrl: './tournament-card.component.css'
})
export class TournamentCardComponent {

  tournament = input.required<TournamentCard>();
}
