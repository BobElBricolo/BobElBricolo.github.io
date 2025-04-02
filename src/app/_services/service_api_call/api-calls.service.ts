import { inject, Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import { ProfilInfo } from '../../_models/ProfilInfo';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  private jsonFilePathForProfile = 'assets/_data/MockDataProfil.json';

  constructor(private http: HttpClient) { }

  router = inject(Router);


  getProfileInfo(userId: string): Observable<ProfilInfo> {
    return this.http.get<ProfilInfo[]>(this.jsonFilePathForProfile).pipe(
      map(profiles => {
        const profile = profiles.find(p => p.id === userId);
        if (!profile) {
          throw new Error(`Profil avec l'id ${userId} introuvable`);
        }
        return profile;
      }),
      catchError(() => {
        // Fallback: créer un profil avec le currentUser (plus tard ce sera inutile avec une vraie API)
        const userData = localStorage.getItem('currentUser');
        if (!userData) {
          return EMPTY;
        }

        const currentUser = JSON.parse(userData);
        const fallbackProfile = new ProfilInfo(
          currentUser.id,
          currentUser.username,
          currentUser.email,
          currentUser.profileImage,
          currentUser.bio,
          new Date().toISOString()
        );
        return of(fallbackProfile); // Observable de secours
      })
    );
  }

}
