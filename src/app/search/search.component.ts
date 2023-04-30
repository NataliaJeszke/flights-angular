import { Component } from '@angular/core';
import { SearchFlightData } from '../models/SearchFlightData';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchSetData = [];
  departureInputValue = '';
  arrivalInputValue = '';
  dateInputValue = '0';

  searchData(
    departureInput: string,
    arrivalInput: string,
    dateDepartureInput: string,

  ) {

    const searchFlightData: SearchFlightData = {
      departureInput,
      arrivalInput,
      dateDepartureInput,
      formatDepartureDateUnix() {
        return new Date(dateDepartureInput).getTime() / 1000;
      },
    };
    console.log(
      departureInput,
      arrivalInput,
      searchFlightData.formatDepartureDateUnix()
    );
  }
}
