import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-tournaments-page',
  imports: [
    FormsModule,
    DatePipe,
    TranslatePipe
  ],
  templateUrl: './tournaments-page.component.html',
  styleUrl: './tournaments-page.component.css',
})
export class TournamentsPageComponent {

  constructor(public translate: TranslateService) {
  }

    get currentLang(): string {
      return this.translate.currentLang || this.translate.getDefaultLang();
    }
  
    getTournamentTitle(tournament: any): string {
      const lang = this.translate.currentLang;
      const title = tournament.title;

      if (!title) return '[Sans titre]'; // ou n’importe quel fallback

      if (typeof title === 'string') return title;

      return title[lang] /*|| title['en'] */|| Object.values(title)[0] || '[Sans titre]';
    }
  
    getTournamentDescription(tournament: any): string {
      const lang = this.translate.currentLang;
      return tournament.description?.[lang] || tournament.description?.['en'];
    }
  
  private router = inject(Router)

  searchTerm: string = '';
  viewMode: 'upcoming' | 'past' = 'upcoming';

  get filteredTournaments() {
      const now = new Date();
      return this.tournaments
        .filter(t => {
          const matchesSearch =
            t.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            t.game.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            t.description.toLowerCase().includes(this.searchTerm.toLowerCase());
  
          const isPast = t.date < now;
          return matchesSearch && (
            (this.viewMode === 'upcoming' && !isPast) ||
            (this.viewMode === 'past' && isPast)
          );
        })
        .sort((a, b) => a.date.getTime() - b.date.getTime());
    }
  



  tournaments = [
    {
      id: 1,
      title: 'Valorant Cup',
      game: 'Valorant',
      date: new Date('2025-05-12'),
      link: '#',
      description: 'Join the Valorant Cup, where you could compete for glory and money!',
      image: 'assets/_videoGames/Valorant.jpg',
      showDescription: false
    },
    {
      id: 2,
      title: 'Valorant Championship',
      game: 'Valorant',
      date: new Date('2025-06-25'),
      link: '#',
      description: 'Join the Valorant Championship, where you could compete for glory and money!',
      image: 'assets/_videoGames/Valorant.jpg',
      showDescription: false
    },
    {
      id: 3,
      title: 'Valorant Tournament',
      game: 'Valorant',
      date: new Date('2025-08-02'),
      link: '#',
      description: 'Join the Valorant Tournament, where you could compete for glory and money!',
      image: 'assets/_videoGames/Valorant.jpg',
      showDescription: false
    },
    {
      id: 4,
      title: 'Valorant League',
      game: 'Valorant',
      date: new Date('2025-06-29'),
      link: '#',
      description: 'Join the Valorant League, where you could compete for glory and money!',
      image: 'assets/_videoGames/Valorant.jpg',
      showDescription: false
    },
    {
      id: 5,
      title: 'Rocket League Showdown',
      game: 'Rocket League',
      date: new Date('2025-06-15'),
      link: '#',
      description: 'Join the Rocket League Showdown, where you could compete for glory and money!',
      image: 'assets/_videoGames/RocketLeague.jpg',
      showDescription: false
    },
    {
      id: 6,
      title: 'Rocket League Tournament',
      game: 'Rocket League',
      date: new Date('2025-10-02'),
      link: '#',
      description: 'Join the Rocket League Tournament, where you could compete for glory and money!',
      image: 'assets/_videoGames/RocketLeague.jpg',
      showDescription: false
    },
    {
      id: 7,
      title: 'Rocket League Cup',
      game: 'Rocket League',
      date: new Date('2025-08-17'),
      link: '#',
      description: 'Join the Rocket League Cup, where you could compete for glory and money!',
      image: 'assets/_videoGames/RocketLeague.jpg',
      showDescription: false
    },
    {
      id: 8,
      title: 'Rocket League Getaway',
      game: 'Rocket League',
      date: new Date('2025-06-23'),
      link: '#',
      description: 'Join the Rocket League Getaway, where you could compete for glory and money!',
      image: 'assets/_videoGames/RocketLeague.jpg',
      showDescription: false
    },
    {
      id: 9,
      title: 'League of Legends Tournament',
      game: 'League of Legends',
      date: new Date('2025-08-20'),
      link: '#',
      description: 'Join the League of Legends Tournament, where you could compete for glory and money!',
      image: 'assets/_videoGames/LeagueOfLegends.jpg',
      showDescription: false
    },
    {
      id: 10,
      title: 'League of Legends Showdown',
      game: 'League of Legends',
      date: new Date('2025-11-03'),
      link: '#',
      description: 'Join the League of Legends Showdown, where you could compete for glory and money!',
      image: 'assets/_videoGames/LeagueOfLegends.jpg',
      showDescription: false
    },
    {
      id: 11,
      title: 'League of Legends Getaway',
      game: 'League of Legends',
      date: new Date('2025-12-21'),
      link: '#',
      description: 'Join the League of Legends Tournament, where you could compete for glory and money!',
      image: 'assets/_videoGames/LeagueOfLegends.jpg',
      showDescription: false
    },
    {
      id: 12,
      title: 'League of Legends Championship',
      game: 'League of Legends',
      date: new Date('2025-09-23'),
      link: '#',
      description: 'Join the League of Legends Championship, where you could compete for glory and money!',
      image: 'assets/_videoGames/LeagueOfLegends.jpg',
      showDescription: false
    },
    {
      id: 13,
      title: 'Apex Legends Tournament',
      game: 'Apex Legends',
      date: new Date('2025-07-22'),
      link: '#',
      description: 'Join the Apex Legends Tournament, where you could compete for glory and money!',
      image: 'assets/_videoGames/ApexLegends.jpg',
      showDescription: false
    },
    {
      id: 14,
      title: 'Apex Legends Championship',
      game: 'Apex Legends',
      date: new Date('2025-09-24'),
      link: '#',
      description: 'Join the Apex Legends Championship, where you could compete for glory and money!',
      image: 'assets/_videoGames/ApexLegends.jpg',
      showDescription: false
    },
    {
      id: 15,
      title: 'Apex Legends Showdown',
      game: 'Apex Legends',
      date: new Date('2025-09-05'),
      link: '#',
      description: 'Join the Apex Legends Showdown, where you could compete for glory and money!',
      image: 'assets/_videoGames/ApexLegends.jpg',
      showDescription: false
    },
    {
      id: 16,
      title: 'Apex Legends Getaway',
      game: 'Apex Legends',
      date: new Date('2025-08-26'),
      link: '#',
      description: 'Join the Apex Legends Getaway, where you could compete for glory and money!',
      image: 'assets/_videoGames/ApexLegends.jpg',
      showDescription: false
    },
    {
      id: 17,
      title: 'Dota 2 Tournament',
      game: 'Dota 2',
      date: new Date('2025-07-30'),
      link: '#',
      description: 'Join the Dota 2 Tournament, where you could compete for glory and money!',
      image: 'assets/_videoGames/Dota2.jpg',
      showDescription: false
    },
    {
      id: 18,
      title: 'Dota 2 Championship',
      game: 'Dota 2',
      date: new Date('2025-11-07'),
      link: '#',
      description: 'Join the Dota 2 Championship, where you could compete for glory and money!',
      image: 'assets/_videoGames/Dota2.jpg',
      showDescription: false
    },
    {
      id: 19,
      title: 'Dota 2 Showdown',
      game: 'Dota 2',
      date: new Date('2025-06-14'),
      link: '#',
      description: 'Join the Dota 2 Showdown, where you could compete for glory and money!',
      image: 'assets/_videoGames/Dota2.jpg',
      showDescription: false
    },
    {
      id: 20,
      title: 'Dota 2 Getaway',
      game: 'Dota 2',
      date: new Date('2025-03-30'),
      link: '#',
      description: 'Join the Dota 2 Getaway, where you could compete for glory and money!',
      image: 'assets/_videoGames/Dota2.jpg',
      showDescription: false
    },
    {
      id: 21,
      title: 'Fortnite Tournament',
      game: 'Fortnite',
      date: new Date('2025-05-18'),
      link: '#',
      description: 'Join the Fortnite Tournament, where you could compete for glory and money!',
      image: 'assets/_videoGames/Fortnite.jpg',
      showDescription: false
    },
    {
      id: 22,
      title: 'Fortnite Championship',
      game: 'Fortnite',
      date: new Date('2025-08-19'),
      link: '#',
      description: 'Join the Fortnite Championship, where you could compete for glory and money!',
      image: 'assets/_videoGames/Fortnite.jpg',
      showDescription: false
    },
    {
      id: 23,
      title: 'Fortnite Showdown',
      game: 'Fortnite',
      date: new Date('2025-03-09'),
      link: '#',
      description: 'Join the Fortnite Showdown, where you could compete for glory and money!',
      image: 'assets/_videoGames/Fortnite.jpg',
      showDescription: false
    },
    {
      id: 24,
      title: 'Fortnite Getaway',
      game: 'Fortnite',
      date: new Date('2025-07-31'),
      link: '#',
      description: 'Join the Fortnite Getaway, where you could compete for glory and money!',
      image: 'assets/_videoGames/Fortnite.jpg',
      showDescription: false
    },
    {
      id: 25,
      title: 'Warzone Tournament',
      game: 'Warzone',
      date: new Date('2025-06-26'),
      link: '#',
      description: 'Join the Warzone Tournament, where you could compete for glory and money!',
      image: 'assets/_videoGames/Warzone.jpg',
      showDescription: false
    },
    {
      id: 26,
      title: 'Warzone Championship',
      game: 'Warzone',
      date: new Date('2025-11-27'),
      link: '#',
      description: 'Join the Warzone Championship, where you could compete for glory and money!',
      image: 'assets/_videoGames/Warzone.jpg',
      showDescription: false
    },
    {
      id: 27,
      title: 'Warzone Showdown',
      game: 'Warzone',
      date: new Date('2025-02-11'),
      link: '#',
      description: 'Join the Warzone Showdown, where you could compete for glory and money!',
      image: 'assets/_videoGames/Warzone.jpg',
      showDescription: false
    },
    {
      id: 28,
      title: 'Warzone Getaway',
      game: 'Warzone',
      date: new Date('2025-09-01'),
      link: '#',
      description: 'Join the Warzone Getaway, where you could compete for glory and money!',
      image: 'assets/_videoGames/Warzone.jpg',
      showDescription: false
    }

  ];


  openTournament(id: number) {
    this.router.navigate(['tournament', id]);
  }


  toggleDescription(tournament: any): void {
    tournament.showDescription = !tournament.showDescription;
  }
}
