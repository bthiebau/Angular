import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string | null
  private readonly http = inject(HttpClient)

  get token(): string | undefined {
    return this._token
  }

  get isAuthenticated(): boolean {
    return !!this._token
  }

  async login(email: string, password: string): Promise<void> {
    const request = this.http.post<{access_token: string}>('https://api.escuelajs.co/api/v1/auth/login', {
      email: email,
      password: password
    })

    const response = await lastValueFrom(request);
    this._token = response.access_token;
  }

  logout(): void {
    this._token = undefined
  }
}
