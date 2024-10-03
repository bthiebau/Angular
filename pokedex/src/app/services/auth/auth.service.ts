import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | undefined

  get isAuthenticated(): boolean {
    return !!this.token
  }
  login(username: string, password: string): Promise<void> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'P@ssw0rd') {
          this.token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.4v6'
          res()
        } else {
          rej('Les identifiants sont incorrects.')
        }
      }, 200)
    })
  }

  logout(): void {
    this.token = undefined
  }
}