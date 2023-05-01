import { Component, OnInit } from '@angular/core';
import { ChosenFlightService } from '../services/chosen-flight.service';
import { FlightData } from '../models/FlightDataInterface';

@Component({
  selector: 'app-chosen-flight',
  templateUrl: './chosen-flight.component.html',
  styleUrls: ['./chosen-flight.component.css'],
})
export class ChosenFlightComponent implements OnInit {
  chosenFlightValues: FlightData[] = [];
  constructor(private chosenFlightService: ChosenFlightService) {}

  ngOnInit(): void {
    this.chosenFlightValues = this.chosenFlightService.getChosenFlightValues();
  }
  formatArrivalDate(chosenFlightValues: FlightData): string {
    return new Date(chosenFlightValues.arrival * 1000).toLocaleString();
  }
  formatDepartureDate(chosenFlightValues: FlightData): string {
    return new Date(chosenFlightValues.departure * 1000).toLocaleString();
  }
}
