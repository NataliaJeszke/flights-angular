import { Component } from '@angular/core';
import { SearchFlightData } from '../models/SearchFlightData';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  departureInputValue = '';
  arrivalInputValue = '';
  dateInputValue = '0';

  constructor(private searchService: SearchService) {}

  searchData(
    departureInput: string,
    arrivalInput: string,
    dateDepartureInput: string
  ) {
    const searchFlightData: SearchFlightData = {
      departureInput,
      arrivalInput,
      dateDepartureInput,
      formatDepartureDateUnix() {
        return new Date(dateDepartureInput).getTime() / 1000;
      },
    };
    
    this.searchService.addSearchValue(searchFlightData);
  }
}