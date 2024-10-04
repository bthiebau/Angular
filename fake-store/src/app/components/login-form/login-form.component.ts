import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


export interface LoginFormContent {
  email: string
  password: string
}

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {

  @Input({required: false}) errMsg?: string

  @Output() formSubmitted: EventEmitter<LoginFormContent> = new EventEmitter<LoginFormContent>()
  form: FormGroup


  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.email
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
      this.formSubmitted.emit({email, password})
      
    }
  }
}
