import { Injectable } from '@angular/core';
import { SearchFlightData } from '../models/SearchFlightData';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchValues: SearchFlightData[] = [];

  addSearchValue(searchFlightData: SearchFlightData) {
    this.searchValues.push(searchFlightData);
  }

  getSearchValues() {
    return this.searchValues;
  }
}