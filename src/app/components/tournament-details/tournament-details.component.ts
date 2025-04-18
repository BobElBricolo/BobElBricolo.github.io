import {Component, inject, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe, NgClass} from '@angular/common';
import {ApiCallsService} from '../../_services/service_api_call/api-calls.service';
import {ActivatedRoute} from '@angular/router';
import {Tournament} from '../../_models/TournamentDetails';
import {TranslateService} from '@ngx-translate/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-tournament-details',
  imports: [
    DatePipe,
    CurrencyPipe,
    NgClass,
    TranslatePipe
  ],
  templateUrl: './tournament-details.component.html',
  styleUrl: './tournament-details.component.css'
})
export class TournamentDetailsComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  getTournamentTitle(tournament: any): string {
    const lang = this.translate.currentLang;
    return tournament.title?.[lang] || tournament.title?.['en'];
  }

  getTournamentDescription(tournament: any): string {
    const lang = this.translate.currentLang;
    return tournament.description?.[lang] || tournament.description?.['en'];
  }

  private readonly apiCall = inject(ApiCallsService);
  private readonly route = inject(ActivatedRoute);

  tournament!: Tournament;

  ngOnInit(): void {
    const tournamentId = Number(this.route.snapshot.paramMap.get('id'));
    if (tournamentId) {
      this.apiCall.getTournamentDetails(tournamentId).subscribe({
        next: (data) => this.tournament = data,
        error: (err) => console.error('Error loading tournament', err)
      });
    }
  }

  redirectToPayment() {
    const features = 'width=800,height=600,top=100,left=100,resizable=yes,scrollbars=yes,status=yes';
    window.open(this.tournament.paiementLink, '_blank', features);
  }
}

