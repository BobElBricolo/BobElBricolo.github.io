import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BetTournament, Player, UserBet } from '../../_models/Player';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TournamentService} from '../../_services/TournamentService/tournament.service';

@Component({
  selector: 'app-bet-page',
  templateUrl: './bet-page.component.html',
  styleUrls: ['./bet-page.component.css'],
  imports: [
    CurrencyPipe,
    FormsModule
  ]
})
export class BetPageComponent implements OnInit {
  tournament!: BetTournament;
  totalAmountBet: number = 0;
  averageBetValue = 10;
  currentUserId = '1';
  selectedPlayer: Player | null = null;
  betAmount: number = 10;
  userBalance: number = 50;
  userBets: UserBet[] = [];

  constructor(
    private route: ActivatedRoute,
    private tournamentService: TournamentService
  ) {}

  ngOnInit(): void {
    const idFromUrl = Number(this.route.snapshot.paramMap.get('id')); // lit l'id de l'URL
    const foundTournament = this.tournamentService.tournaments().find(t => t.id === idFromUrl);

    if (foundTournament) {
      this.tournament = {
        id: `t${foundTournament.id}`, // ou juste `${foundTournament.id}` si tu préfères sans "t"
        title: foundTournament.title.en,
        game: foundTournament.game,
        image: foundTournament.image,
        ownerId: '1',
        ranking: this.getDefaultRanking(),
        betsClosed: false
      };

      this.tournament.ranking.forEach(player => {
        player.totalAmountBet = player.bets * this.averageBetValue;
        this.totalAmountBet += player.totalAmountBet;
      });
    } else {
      console.error('Tournament not found for id:', idFromUrl);
    }
  }

  // ========= Fonctions existantes =========

  openBetModal(player: Player): void {
    this.selectedPlayer = player;
    const existingBet = this.getUserBet(player.id);
    this.betAmount = existingBet ? existingBet.amount : 10;
  }

  closeBetModal(): void {
    this.selectedPlayer = null;
  }

  getPotentialGain(player: Player): number {
    if (!player.odds) return this.betAmount * 1.5;
    return this.betAmount * player.odds;
  }

  placeBet(): void {
    if (this.tournament.betsClosed) return;
    if (!this.selectedPlayer || this.betAmount > this.userBalance + this.getPreviousBetAmount(this.selectedPlayer.id)) return;

    const previousBet = this.getUserBet(this.selectedPlayer.id);
    const previousAmount = previousBet?.amount || 0;

    this.userBalance += previousAmount;
    this.userBalance -= this.betAmount;

    if (previousBet) {
      previousBet.amount = this.betAmount;
    } else {
      this.userBets.push({ playerId: this.selectedPlayer.id, amount: this.betAmount });
      this.selectedPlayer.bets += 1;
    }

    const diff = this.betAmount - previousAmount;
    this.totalAmountBet += diff;
    this.selectedPlayer.totalAmountBet = (this.selectedPlayer.totalAmountBet || 0) + diff;

    this.closeBetModal();
  }

  getPreviousBetAmount(playerId: string): number {
    return this.getUserBet(playerId)?.amount || 0;
  }

  getUserBet(playerId: string): UserBet | undefined {
    return this.userBets.find(bet => bet.playerId === playerId);
  }

  buyCredits(): void {
    this.userBalance += 20;
    alert("Tu as acheté 20$ de crédits !");
  }

  closeBets(): void {
    this.tournament.betsClosed = true;
  }

  // ========= Ajout : Default Ranking pour tous les tournois =========

  getDefaultRanking(): Player[] {
    return [
      { id: '1', username: 'Alex', points: 90, odds: 2.0, bets: 12 },
      { id: '2', username: 'Sam', points: 85, odds: 2.5, bets: 9 },
      { id: '3', username: 'Jessie', points: 70, odds: 3.2, bets: 5 },
      { id: '4', username: 'Leo', points: 60, odds: null, bets: 2 },
    ];
  }
}
