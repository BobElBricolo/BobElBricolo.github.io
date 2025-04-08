import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Match} from '../../../_models/TournamentPreview';

@Component({
  selector: 'app-match-detail',
  imports: [],
  templateUrl: './match-detail.component.html',
  styleUrl: './match-detail.component.css'
})
export class MatchDetailComponent {
  @Input() match!: Match;
  @Output() close = new EventEmitter<void>();
}
