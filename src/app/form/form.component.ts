import { Component, OnInit } from '@angular/core';
import { Passenger } from '../models/PassengerInterface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  model!: Partial<Passenger>;
  constructor() {}
  ngOnInit(): void {
    this.model = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: 0,
      address: '',
    };
  }
}
