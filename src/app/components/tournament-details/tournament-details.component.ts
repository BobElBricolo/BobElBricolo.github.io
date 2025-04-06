import {Component, inject, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe, NgClass} from '@angular/common';
import {ApiCallsService} from '../../_services/service_api_call/api-calls.service';
import {ActivatedRoute} from '@angular/router';
import {Tournament} from '../../_models/TournamentDetails';

@Component({
  selector: 'app-tournament-details',
  imports: [
    DatePipe,
    CurrencyPipe,
    NgClass
  ],
  templateUrl: './tournament-details.component.html',
  styleUrl: './tournament-details.component.css'
})
export class TournamentDetailsComponent implements OnInit {
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
}

