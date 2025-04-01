import { Injectable } from '@angular/core';
import { ApiCallsService } from '../service_api_call/api-calls.service';
import { Router } from '@angular/router';
import { ProfilInfo } from '../../_models/ProfilInfo';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private readonly CURRENT_USER_KEY = 'currentUser';

  constructor(private apiCallService: ApiCallsService, private router: Router) {
  }

  getUser(): ProfilInfo {
    const userData = localStorage.getItem(this.CURRENT_USER_KEY);
    if (!userData) {
      this.router.navigate(['/login']);
    }
    const currentUser = userData ? JSON.parse(userData) : null;

    if (!currentUser) {
      this.router.navigate(['/login']);
      return new ProfilInfo("", "", "", "", "", "");
    }
    return currentUser;
  }

  setUser(user: ProfilInfo): void {
    if (user) {
      localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
    }
  }

}
