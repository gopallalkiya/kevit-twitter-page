import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private USER_KEY = 'currentUser';

  setUsername(username: string) {
    localStorage.setItem(this.USER_KEY, username);
  }

  getUsername(): string | null {
    return localStorage.getItem(this.USER_KEY);
  }

  logout() {
    localStorage.removeItem(this.USER_KEY);
  }
}
