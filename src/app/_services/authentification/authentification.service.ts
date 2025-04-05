import { Injectable } from '@angular/core';
import { ApiCallsService } from '../service_api_call/api-calls.service';
import { Router } from '@angular/router';
import { User, UserToConnect, UserToRegister } from '../../_models/UserInfo';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private readonly CURRENT_USER_KEY = 'currentUser';

  constructor(private apiCallService: ApiCallsService, private router: Router) {
  }

  getUser(): User {
    const userData = localStorage.getItem(this.CURRENT_USER_KEY);

    const currentUser = userData ? JSON.parse(userData) : null;

    return currentUser;
  }

  setUser(user: User): void {
    if (user) {
      localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
    }
  }

  isNotLogggedIn(): boolean {
    return !localStorage.getItem(this.CURRENT_USER_KEY);
  }

  logout(): void {
    localStorage.removeItem(this.CURRENT_USER_KEY);
    this.router.navigate(['/home']);
  }

  saveUser(user: User): void {
    localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
  }

  loginUser(user: UserToConnect): Observable<boolean> {
    return this.apiCallService.connectUser(user.email, user.password).pipe(
      map((data) => {
        this.saveUser(data);
        return true;
      }),
      catchError((err) => {
        console.error('Erreur lors de la connexion:', err);
        return of(false);
      })
    );
  }

  registerUser(user: UserToRegister): Observable<boolean> {
    return this.apiCallService.registerUser(user).pipe(
      map((data) => {
        this.saveUser(data);
        return true;
      }),
      catchError((err) => {
        console.error('Erreur lors de l\'inscription:', err);
        return of(false);
      })
    );
  }

}
