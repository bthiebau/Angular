import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-car-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-car-form.component.html',
  styleUrl: './add-car-form.component.scss'
})
export class AddCarFormComponent implements OnInit{

  @Output() formSubmitted: EventEmitter<AddCarFormComponent> = new EventEmitter<AddCarFormComponent>()
  form: FormGroup

  ngOnInit(): void {
    
  }

  onSubmitForm(): void {
    
  }
}
