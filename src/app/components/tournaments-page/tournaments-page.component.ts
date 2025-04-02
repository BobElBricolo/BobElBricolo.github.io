import { Component } from '@angular/core';

@Component({
  selector: 'app-tournaments-page',
  imports: [],
  templateUrl: './tournaments-page.component.html',
  styleUrl: './tournaments-page.component.css',
})
export class TournamentsPageComponent {
  tournaments = [
    {
      title: 'Valorant Cup',
      game: 'Valorant',
      date: 'April 12, 2025',
      link: '#',
      description: 'Join the Valorant Cup, where you could compete for glory and money!',
      image: 'assets/_videoGames/Valorant.jpg',
      showDescription: false
    },
    {
      title: 'Valorant Championship',
      game: 'Valorant',
      date: 'April 25, 2025',
      link: '#',
      description: 'Join the Valorant Championship, where you could compete for glory and money!',
      image: 'assets/_videoGames/Valorant.jpg',
      showDescription: false
    },
    {
      title: 'Valorant Tournament',
      game: 'Valorant',
      date: 'June 2, 2025',
      link: '#',
      description: 'Join the Valorant Tournament, where you could compete for glory and money!',
      image: 'assets/_videoGames/Valorant.jpg',
      showDescription: false
    },
    {
      title: 'Valorant League',
      game: 'Valorant',
      date: 'April 29, 2025',
      link: '#',
      description: 'Join the Valorant League, where you could compete for glory and money!',
      image: 'assets/_videoGames/Valorant.jpg',
      showDescription: false
    },
    {
      title: 'Rocket League Showdown',
      game: 'Rocket League',
      date: 'April 15, 2025',
      link: '#',
      description: 'Join the Rocket League Showdown, where you could compete for glory and money!',
      image: 'assets/_videoGames/RocketLeague.jpg',
      showDescription: false
    },
    {
      title: 'Rocket League Tournament',
      game: 'Rocket League',
      date: 'August 2, 2025',
      link: '#',
      description: 'Join the Rocket League Tournament, where you could compete for glory and money!',
      image: 'assets/_videoGames/RocketLeague.jpg',
      showDescription: false
    },
    {
      title: 'Rocket League Cup',
      game: 'Rocket League',
      date: 'April 17, 2025',
      link: '#',
      description: 'Join the Rocket League Cup, where you could compete for glory and money!',
      image: 'assets/_videoGames/RocketLeague.jpg',
      showDescription: false
    },
    {
      title: 'Rocket League Getaway',
      game: 'Rocket League',
      date: 'April 23, 2025',
      link: '#',
      description: 'Join the Rocket League Getaway, where you could compete for glory and money!',
      image: 'assets/_videoGames/RocketLeague.jpg',
      showDescription: false
    },
    {
      title: 'League of Legends Tournament',
      game: 'League of Legends',
      date: 'April 20, 2025',
      link: '#',
      description: 'Join the League of Legends Tournament, where you could compete for glory and money!',
      image: 'assets/_videoGames/LeagueOfLegends.jpg',
      showDescription: false
    },
    {
      title: 'League of Legends Showdown',
      game: 'League of Legends',
      date: 'June 3, 2025',
      link: '#',
      description: 'Join the League of Legends Showdown, where you could compete for glory and money!',
      image: 'assets/_videoGames/LeagueOfLegends.jpg',
      showDescription: false
    },
    {
      title: 'League of Legends Getaway',
      game: 'League of Legends',
      date: 'April 21, 2025',
      link: '#',
      description: 'Join the League of Legends Tournament, where you could compete for glory and money!',
      image: 'assets/_videoGames/LeagueOfLegends.jpg',
      showDescription: false
    },
    {
      title: 'League of Legends Championship',
      game: 'League of Legends',
      date: 'April 23, 2025',
      link: '#',
      description: 'Join the League of Legends Championship, where you could compete for glory and money!',
      image: 'assets/_videoGames/LeagueOfLegends.jpg',
      showDescription: false
    },
    {
      title: 'Apex Legends Tournament',
      game: 'Apex Legends',
      date: 'April 22, 2025',
      link: '#',
      description: 'Join the Apex Legends Tournament, where you could compete for glory and money!',
      image: 'assets/_videoGames/ApexLegends.jpg',
      showDescription: false
    },
    {
      title: 'Apex Legends Championship',
      game: 'Apex Legends',
      date: 'April 24, 2025',
      link: '#',
      description: 'Join the Apex Legends Championship, where you could compete for glory and money!',
      image: 'assets/_videoGames/ApexLegends.jpg',
      showDescription: false
    },
    {
      title: 'Apex Legends Showdown',
      game: 'Apex Legends',
      date: 'June 5, 2025',
      link: '#',
      description: 'Join the Apex Legends Showdown, where you could compete for glory and money!',
      image: 'assets/_videoGames/ApexLegends.jpg',
      showDescription: false
    },
    {
      title: 'Apex Legends Getaway',
      game: 'Apex Legends',
      date: 'August 26, 2025',
      link: '#',
      description: 'Join the Apex Legends Getaway, where you could compete for glory and money!',
      image: 'assets/_videoGames/ApexLegends.jpg',
      showDescription: false
    },
    {
      title: 'Dota 2 Tournament',
      game: 'Dota 2',
      date: 'April 30, 2025',
      link: '#',
      description: 'Join the Dota 2 Tournament, where you could compete for glory and money!',
      image: 'assets/_videoGames/Dota2.jpg',
      showDescription: false
    },
    {
      title: 'Dota 2 Championship',
      game: 'Dota 2',
      date: 'June 7, 2025',
      link: '#',
      description: 'Join the Dota 2 Championship, where you could compete for glory and money!',
      image: 'assets/_videoGames/Dota2.jpg',
      showDescription: false
    },
    {
      title: 'Dota 2 Showdown',
      game: 'Dota 2',
      date: 'April 14, 2025',
      link: '#',
      description: 'Join the Dota 2 Showdown, where you could compete for glory and money!',
      image: 'assets/_videoGames/Dota2.jpg',
      showDescription: false
    },
    {
      title: 'Dota 2 Getaway',
      game: 'Dota 2',
      date: 'August 30, 2025',
      link: '#',
      description: 'Join the Dota 2 Getaway, where you could compete for glory and money!',
      image: 'assets/_videoGames/Dota2.jpg',
      showDescription: false
    },
    {
      title: 'Fortnite Tournament',
      game: 'Fortnite',
      date: 'April 18, 2025',
      link: '#',
      description: 'Join the Fortnite Tournament, where you could compete for glory and money!',
      image: 'assets/_videoGames/Fortnite.jpg',
      showDescription: false
    },
    {
      title: 'Fortnite Championship',
      game: 'Fortnite',
      date: 'April 19, 2025',
      link: '#',
      description: 'Join the Fortnite Championship, where you could compete for glory and money!',
      image: 'assets/_videoGames/Fortnite.jpg',
      showDescription: false
    },
    {
      title: 'Fortnite Showdown',
      game: 'Fortnite',
      date: 'June 9, 2025',
      link: '#',
      description: 'Join the Fortnite Showdown, where you could compete for glory and money!',
      image: 'assets/_videoGames/Fortnite.jpg',
      showDescription: false
    },
    {
      title: 'Fortnite Getaway',
      game: 'Fortnite',
      date: 'August 31, 2025',
      link: '#',
      description: 'Join the Fortnite Getaway, where you could compete for glory and money!',
      image: 'assets/_videoGames/Fortnite.jpg',
      showDescription: false
    },
    {
      title: 'Warzone Tournament',
      game: 'Warzone',
      date: 'April 26, 2025',
      link: '#',
      description: 'Join the Warzone Tournament, where you could compete for glory and money!',
      image: 'assets/_videoGames/Warzone.jpg',
      showDescription: false
    },
    {
      title: 'Warzone Championship',
      game: 'Warzone',
      date: 'April 27, 2025',
      link: '#',
      description: 'Join the Warzone Championship, where you could compete for glory and money!',
      image: 'assets/_videoGames/Warzone.jpg',
      showDescription: false
    },
    {
      title: 'Warzone Showdown',
      game: 'Warzone',
      date: 'June 11, 2025',
      link: '#',
      description: 'Join the Warzone Showdown, where you could compete for glory and money!',
      image: 'assets/_videoGames/Warzone.jpg',
      showDescription: false
    },
    {
      title: 'Warzone Getaway',
      game: 'Warzone',
      date: 'September 1, 2025',
      link: '#',
      description: 'Join the Warzone Getaway, where you could compete for glory and money!',
      image: 'assets/_videoGames/Warzone.jpg',
      showDescription: false
    },
  ];
  toggleDescription(tournament: any): void {
    tournament.showDescription = !tournament.showDescription;
  }
}
