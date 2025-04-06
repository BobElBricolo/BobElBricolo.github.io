import { inject, Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import { User, UserName, UserToRegister } from '../../_models/UserInfo';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Tournament} from '../../_models/TournamentDetails';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  private jsonFilePathForProfile = '/assets/_data/MockDataProfil.json';
  private jsonFilePathForUserNames = '/assets/_data/MockDataUserNames.json';
  private jsonFileForTournamentDetails = '/assets/_data/MockDataTournaments.json';

  constructor(private http: HttpClient) { }

  router = inject(Router);

  getProfileInfo(userId: string): Observable<User> {
    return this.http.get<User[]>(this.jsonFilePathForProfile).pipe(
      map(profiles => {
        const profile = profiles.find(p => p.id === userId);
        if (!profile) {
          throw new Error(`Profil avec l'id ${userId} introuvable`);
        }
        return profile;
      }),
      catchError(() => {
        const userData = localStorage.getItem('currentUser');
        if (!userData) {
          return EMPTY;
        }

        const currentUser = JSON.parse(userData);
        const fallbackProfile = new User(
          currentUser.id,
          currentUser.username,
          currentUser.email,
          new Date().toISOString(),
          currentUser.isPremium,
          currentUser.profileImage,
          currentUser.bio,
        );
        return of(fallbackProfile);
      })
    );
  }

  getAllProfileNames(): Observable<UserName[]> {
    const userData = localStorage.getItem('currentUser');

    return this.http.get<UserName[]>(this.jsonFilePathForUserNames).pipe(
      map(data => {
        if (userData) {
          const currentUser = JSON.parse(userData);
          const exists = data.some(user => user.id === currentUser.id);
          if (!exists) {
            data.unshift(new UserName(currentUser.id, currentUser.username));
          }
        }
        return data;
      })
    );
  }

  connectUser(email: string, password: string): Observable<User> {
    if ((email === 'bobby.bob@uqtr.ca' && password === '123456') ||
      (email === 'noscope@example.com' && password === 'passwordNoscope')) {
      return this.http.get<User[]>(this.jsonFilePathForProfile).pipe(
        map(users => {
          const user = users.find(u => u.email === email);
          if (!user) {
            throw new Error(`Utilisateur avec l'email ${email} introuvable`);
          }
          return user;
        })
      );
    }
    return new Observable(subscriber => {
      subscriber.error('Invalid credentials');
    });
  }

  registerUser(user: UserToRegister): Observable<User> {
    const id = Math.floor(Math.random() * 1000).toString();
    const createdAt = new Date().toISOString();
    const newUser = new User(id, user.username, user.email, createdAt, false, "assets/_background/Astronaut.png", '');

    return new Observable(subscriber => {
      subscriber.next(newUser);
    });
  }

  getTournamentDetails(tournamentId: number): Observable<Tournament> {
    return this.http.get<Tournament[]>(this.jsonFileForTournamentDetails).pipe(
      map(tournaments => {
        const tournament = tournaments.find(t => t.id === tournamentId);
        if (!tournament) {
          throw new Error(`Tournament with id ${tournamentId} not found`);
        }
        return tournament;
      }),
      catchError(() => {
        console.error('Error fetching tournament details');
        return EMPTY;
      })
    );
  }


}
