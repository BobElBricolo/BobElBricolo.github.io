import {Component, inject} from '@angular/core';
import {TournamentCard} from '../../_models/TournamentCard';
import {TournamentCardComponent} from '../tournament-card/tournament-card.component';
import {Router} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-next-tournament',
  imports: [
    TournamentCardComponent,
    TranslatePipe
  ],
  templateUrl: './next-tournament.component.html',
  styleUrl: './next-tournament.component.css'
})
export class NextTournamentComponent {

  private readonly router = inject(Router)

  tournament: TournamentCard = {
    tournamentName: 'HOME.TS.TOURNAMENT-NAME-RL',
    tournamentDate: 'HOME.TS.TOURNAMENT-DATE-RL',
    tournamentLocation: 'HOME.TS.TOURNAMENT-LOCATION-RL',
    tournamentDescription: 'HOME.TS.TOURNAMENT-DESCRIPTION-RL',
    tournamentImage: 'assets/_videoGames/Valorant.jpg'
  }

  openTournamentLink() {
    this.router.navigate(['tournament', 1]);
  }

}
