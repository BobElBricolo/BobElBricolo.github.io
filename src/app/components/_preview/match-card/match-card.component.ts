import {Component, input} from '@angular/core';
import {Match} from '../../../_models/TournamentPreview';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-match-card',
  imports: [TranslatePipe],
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.css'
})
export class MatchCardComponent {
match = input.required<Match>();

}
