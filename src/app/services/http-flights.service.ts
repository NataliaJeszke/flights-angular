import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightDataInterface } from '../models/FlightDataInterface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpFlightsService {
  private url =
    'http://localhost:3000/flights';
  constructor(private http: HttpClient) {}

  getFlights(): Observable<FlightDataInterface[]> {
    return this.http
      .get<FlightDataInterface[]>(this.url)
      .pipe(tap(console.log));
  }
}
