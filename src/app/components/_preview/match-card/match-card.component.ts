import {Component, input} from '@angular/core';
import {Match} from '../../../_models/TournamentPreview';

@Component({
  selector: 'app-match-card',
  imports: [],
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.css'
})
export class MatchCardComponent {
match = input.required<Match>();

}
