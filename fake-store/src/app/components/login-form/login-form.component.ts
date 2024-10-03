import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router) //Permet d'acceder à la fonction navigateByUrl

  form: FormGroup;
  errMsg: string;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    })
  }

  async onSubmitForm(): Promise<void> {
    if(this.form.valid) {
      const {email, password} = this.form.value
      try {
        this.authService.login(email, password)
        this.router.navigateByUrl('/') //route mis dans le app.routes.ts
      } catch (e: unknown) {
        this.errMsg = typeof e === 'string' ? e : 'Une erreur est survenue'
      }
      
    }
  }
}
