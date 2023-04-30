import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { FlightDataInterface } from '../models/FlightDataInterface';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpFlightsService {
  private url =
    'http://localhost:3000/flights';
  constructor(private http: HttpClient) {}

  errorMsg: string = '';
  getFlights(): Observable<FlightDataInterface[]> {
    return this.http
      .get<FlightDataInterface[]>(this.url)
      .pipe(tap(console.log), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse):Observable<never> 
  { console.error(
    `Name: ${error.name}\n` +
    `Message: ${error.message}\n` +
    `Returned code: ${error.status}\n`
  );
  return throwError("Request didn't work, try again later")
  }
}
