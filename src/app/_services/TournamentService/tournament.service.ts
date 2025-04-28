import {Injectable, signal} from '@angular/core';

// Modèle d'un tournoi rapide
export interface Tournament {
  id: number;
  title: { en: string; fr: string };
  game: string;
  date: Date;
  link: string;
  description: { en: string; fr: string };
  image: string;
  showDescription: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor() {
  }

  tournaments = signal<Tournament[]>([
      {
        id: 1,
        title: {
          en: 'Valorant Cup',
          fr: 'Coupe Valorant'
        },
        game: 'Valorant',
        date: new Date('2025-05-12'),
        link: '#',
        description: {
          en: 'Join the Valorant Cup, where you could compete for glory and money!',
          fr: 'Participez à la Coupe Valorant, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/Valorant.jpg',
        showDescription: false
      },
      {
        id: 2,
        title: {
          en: 'Valorant Championship',
          fr: 'Championnat Valorant'
        },
        game: 'Valorant',
        date: new Date('2025-06-25'),
        link: '#',
        description: {
          en: 'Join the Valorant Championship, where you could compete for glory and money!',
          fr: 'Participez au Championnat Valorant, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/Valorant.jpg',
        showDescription: false
      },
      {
        id: 3,
        title: {
          en: 'Valorant Tournament',
          fr: 'Tournoi Valorant'
        },
        game: 'Valorant',
        date: new Date('2025-08-02'),
        link: '#',
        description: {
          en: 'Join the Valorant Tournament, where you could compete for glory and money!',
          fr: 'Participez au Tournoi Valorant, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/Valorant.jpg',
        showDescription: false
      },
      {
        id: 4,
        title: {
          en: 'Valorant League',
          fr: 'Ligue Valorant'
        },
        game: 'Valorant',
        date: new Date('2025-06-29'),
        link: '#',
        description: {
          en: 'Join the Valorant League, where you could compete for glory and money!',
          fr: 'Participez à la Ligue Valorant, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/Valorant.jpg',
        showDescription: false
      },
      {
        id: 5,
        title: {
          en: 'Rocket League Showdown',
          fr: 'Duel Rocket League'
        },
        game: 'Rocket League',
        date: new Date('2025-06-15'),
        link: '#',
        description: {
          en: 'Join the Rocket League Showdown, where you could compete for glory and money!',
          fr: 'Participez au Duel Rocket League, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/RocketLeague.jpg',
        showDescription: false
      },
      {
        id: 6,
        title: {
          en: 'Rocket League Tournament',
          fr: 'Tournoi Rocket League'
        },
        game: 'Rocket League',
        date: new Date('2025-10-02'),
        link: '#',
        description: {
          en: 'Join the Rocket League Tournament, where you could compete for glory and money!',
          fr: 'Participez au Tournoi Rocket League, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/RocketLeague.jpg',
        showDescription: false
      },
      {
        id: 7,
        title: {
          en: 'Rocket League Cup',
          fr: 'Coupe Rocket League'
        },
        game: 'Rocket League',
        date: new Date('2025-08-17'),
        link: '#',
        description: {
          en: 'Join the Rocket League Cup, where you could compete for glory and money!',
          fr: 'Participez à la Coupe Rocket League, où vous pourriez concourir pour la gloire et de l\'argent!'
        },
        image: 'assets/_videoGames/RocketLeague.jpg',
        showDescription: false
      },
      {
        id: 8,
        title: {
          en: 'Rocket League Getaway',
          fr: 'Évasion Rocket League'
        },
        game: 'Rocket League',
        date: new Date('2025-06-23'),
        link: '#',
        description: {
          en: 'Join the Rocket League Getaway, where you could compete for glory and money!',
          fr: 'Participez à l\'Évasion Rocket League, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/RocketLeague.jpg',
        showDescription: false
      },
      {
        id: 9,
        title: {
          en: 'League of Legends Tournament',
          fr: 'Tournoi League of Legends'
        },
        game: 'League of Legends',
        date: new Date('2025-08-20'),
        link: '#',
        description: {
          en: 'Join the League of Legends Tournament, where you could compete for glory and money!',
          fr: 'Participez au Tournoi League of Legends, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/LeagueOfLegends.jpg',
        showDescription: false
      },
      {
        id: 10,
        title: {
          en: 'League of Legends Showdown',
          fr: 'Duel League of Legends'
        },
        game: 'League of Legends',
        date: new Date('2025-11-03'),
        link: '#',
        description: {
          en: 'Join the League of Legends Showdown, where you could compete for glory and money!',
          fr: 'Participez au Duel League of Legends, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/LeagueOfLegends.jpg',
        showDescription: false
      },
      {
        id: 11,
        title: {
          en: 'League of Legends Getaway',
          fr: 'Évasion League of Legends'
        },
        game: 'League of Legends',
        date: new Date('2025-12-21'),
        link: '#',
        description: {
          en: 'Join the League of Legends Getaway, where you could compete for glory and money!',
          fr: 'Participez à l\'Évasion League of Legends, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/LeagueOfLegends.jpg',
        showDescription: false
      },
      {
        id: 12,
        title: {
          en: 'League of Legends Championship',
          fr: 'Championnat League of Legends'
        },
        game: 'League of Legends',
        date: new Date('2025-09-23'),
        link: '#',
        description: {
          en: 'Join the League of Legends Championship, where you could compete for glory and money!',
          fr: 'Participez au Championnat League of Legends, où vous pourriez concourir pour la gloire et de l\'argent!'
        },
        image: 'assets/_videoGames/LeagueOfLegends.jpg',
        showDescription: false
      },
      {
        id: 13,
        title: {
          en: 'Apex Legends Tournament',
          fr: 'Tournoi Apex Legends'
        },
        game: 'Apex Legends',
        date: new Date('2025-07-22'),
        link: '#',
        description: {
          en: 'Join the Apex Legends Tournament, where you could compete for glory and money!',
          fr: 'Participez au Tournoi Apex Legends, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/ApexLegends.jpg',
        showDescription: false
      },
      {
        id: 14,
        title: {
          en: 'Apex Legends Championship',
          fr: 'Championnat Apex Legends'
        },
        game: 'Apex Legends',
        date: new Date('2025-09-24'),
        link: '#',
        description: {
          en: 'Join the Apex Legends Championship, where you could compete for glory and money!',
          fr: 'Participez au Championnat Apex Legends, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/ApexLegends.jpg',
        showDescription: false
      },
      {
        id: 15,
        title: {
          en: 'Apex Legends Showdown',
          fr: 'Duel Apex Legends'
        },
        game: 'Apex Legends',
        date: new Date('2025-09-05'),
        link: '#',
        description: {
          en: 'Join the Apex Legends Showdown, where you could compete for glory and money!',
          fr: 'Participez au Duel Apex Legends, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/ApexLegends.jpg',
        showDescription: false
      },
      {
        id: 16,
        title: {
          en: 'Apex Legends Getaway',
          fr: 'Évasion Apex Legends'
        },
        game: 'Apex Legends',
        date: new Date('2025-08-26'),
        link: '#',
        description: {
          en: 'Join the Apex Legends Getaway, where you could compete for glory and money!',
          fr: 'Participez à l\'Évasion Apex Legends, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/ApexLegends.jpg',
        showDescription: false
      },
      {
        id: 17,
        title: {
          en: 'Dota 2 Tournament',
          fr: 'Tournoi Dota 2'
        },
        game: 'Dota 2',
        date: new Date('2025-07-30'),
        link: '#',
        description: {
          en: 'Join the Dota 2 Tournament, where you could compete for glory and money!',
          fr: 'Participez au Tournoi Dota 2, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/Dota2.jpg',
        showDescription: false
      },
      {
        id: 18,
        title: {
          en: 'Dota 2 Championship',
          fr: 'Championnat Dota 2'
        },
        game: 'Dota 2',
        date: new Date('2025-11-07'),
        link: '#',
        description: {
          en: 'Join the Dota 2 Championship, where you could compete for glory and money!',
          fr: 'Participez au Championnat Dota 2, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/Dota2.jpg',
        showDescription: false
      },
      {
        id: 19,
        title: {
          en: 'Dota 2 Showdown',
          fr: 'Duel Dota 2'
        },
        game: 'Dota 2',
        date: new Date('2025-06-14'),
        link: '#',
        description: {
          en: 'Join the Dota 2 Showdown, where you could compete for glory and money!',
          fr: 'Participez au Duel Dota 2, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/Dota2.jpg',
        showDescription: false
      },
      {
        id: 20,
        title: {
          en: 'Dota 2 Getaway',
          fr: 'Évasion Dota 2'
        },
        game: 'Dota 2',
        date: new Date('2025-03-30'),
        link: '#',
        description: {
          en: 'Join the Dota 2 Getaway, where you could compete for glory and money!',
          fr: 'Participez à l\'Évasion Dota 2, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/Dota2.jpg',
        showDescription: false
      },
      {
        id: 21,
        title: {
          en: 'Fortnite Tournament',
          fr: 'Tournoi Fortnite'
        },
        game: 'Fortnite',
        date: new Date('2025-05-18'),
        link: '#',
        description: {
          en: 'Join the Fortnite Tournament, where you could compete for glory and money!',
          fr: 'Participez au Tournoi Fortnite, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/Fortnite.jpg',
        showDescription: false
      },
      {
        id: 22,
        title: {
          en: 'Fortnite Championship',
          fr: 'Championnat Fortnite'
        },
        game: 'Fortnite',
        date: new Date('2025-08-19'),
        link: '#',
        description: {
          en: 'Join the Fortnite Championship, where you could compete for glory and money!',
          fr: 'Participez au Championnat Fortnite, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/Fortnite.jpg',
        showDescription: false
      },
      {
        id: 23,
        title: {
          en: 'Fortnite Showdown',
          fr: 'Duel Fortnite'
        },
        game: 'Fortnite',
        date: new Date('2025-03-09'),
        link: '#',
        description: {
          en: 'Join the Fortnite Showdown, where you could compete for glory and money!',
          fr: 'Participez au Duel Fortnite, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/Fortnite.jpg',
        showDescription: false
      },
      {
        id: 24,
        title: {
          en: 'Fortnite Getaway',
          fr: 'Évasion Fortnite'
        },
        game: 'Fortnite',
        date: new Date('2025-07-31'),
        link: '#',
        description: {
          en: 'Join the Fortnite Getaway, where you could compete for glory and money!',
          fr: 'Participez à l\'Évasion Fortnite, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/Fortnite.jpg',
        showDescription: false
      },
      {
        id: 25,
        title: {
          en: 'Warzone Tournament',
          fr: 'Tournoi Warzone'
        },
        game: 'Warzone',
        date: new Date('2025-06-26'),
        link: '#',
        description: {
          en: 'Join the Warzone Tournament, where you could compete for glory and money!',
          fr: 'Participez au Tournoi Warzone, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/Warzone.jpg',
        showDescription: false
      },
      {
        id: 26,
        title: {
          en: 'Warzone Championship',
          fr: 'Championnat Warzone'
        },
        game: 'Warzone',
        date: new Date('2025-11-27'),
        link: '#',
        description: {
          en: 'Join the Warzone Championship, where you could compete for glory and money!',
          fr: 'Participez au Championnat Warzone, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/Warzone.jpg',
        showDescription: false
      },
      {
        id: 27,
        title: {
          en: 'Warzone Showdown',
          fr: 'Duel Warzone'
        },
        game: 'Warzone',
        date: new Date('2025-02-11'),
        link: '#',
        description: {
          en: 'Join the Warzone Showdown, where you could compete for glory and money!',
          fr: 'Participez au Duel Warzone, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/Warzone.jpg',
        showDescription: false
      },
      {
        id: 28,
        title: {
          en: 'Warzone Getaway',
          fr: 'Évasion Warzone'
        },
        game: 'Warzone',
        date: new Date('2025-09-01'),
        link: '#',
        description: {
          en: 'Join the Warzone Getaway, where you could compete for glory and money!',
          fr: 'Participez à l\'Évasion Warzone, où vous pourriez concourir pour la gloire et de l\'argent !'
        },
        image: 'assets/_videoGames/Warzone.jpg',
        showDescription: false
      }

    ]
  );


  // Tournoi actuellement sélectionné (ouvert)
  openTournament = signal<Tournament | null>(null);

  // Récupérer le tournoi ouvert
  getOpenTournament(): Tournament | null {
    return this.openTournament();
  }

  // Définir le tournoi ouvert
  setOpenTournament(tournament: Tournament): void {
    this.openTournament.set(tournament);
  }

  // Ajouter un tournoi à la liste
  addTournament(tournament: Tournament): void {
    const currentList = this.tournaments();
    this.tournaments.set([...currentList, tournament]);
  }

  // (optionnel) Réinitialiser le tournoi ouvert
  clearOpenTournament(): void {
    this.openTournament.set(null);
  }
}

