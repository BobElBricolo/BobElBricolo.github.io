import { Component } from '@angular/core';

@Component({
  selector: 'app-bet-modal',
  imports: [],
  templateUrl: './bet-modal.component.html',
  styleUrl: './bet-modal.component.css'
})
export class BetModalComponent {
  @Input() player!: Player;
  @Input() tournament!: Tournament;
  @Output() close = new EventEmitter<void>();

  betAmount = 10;

  getPotentialGain(): number {
    const odds = 2; // Tu peux ajuster par joueur
    return this.betAmount * odds;
  }

  placeBet() {
    this.close.emit();
  }

}
