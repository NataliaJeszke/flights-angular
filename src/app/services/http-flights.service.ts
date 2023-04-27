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
    'http://api.aviationstack.com/v1/flights?access_key=ec54ce9af6c2715258c76721e954a5bc';
  constructor(private http: HttpClient) {}

  getFlights(): Observable<FlightDataInterface[]> {
    return this.http
      .get<FlightDataInterface[]>(this.url)
      .pipe(tap(console.log));
  }

}
