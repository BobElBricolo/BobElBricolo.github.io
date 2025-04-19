import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Match} from '../../../_models/TournamentPreview';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-match-detail',
  imports: [TranslatePipe],
  templateUrl: './match-detail.component.html',
  styleUrl: './match-detail.component.css'
})
export class MatchDetailComponent {
  @Input() match!: Match;
  @Output() close = new EventEmitter<void>();
}
