import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({providedIn: 'root'})
export class UsersService {
    constructor(private http: HttpClient) {}

    getData() {
        let url = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/PL/PLN/pl-PL/LOND-sky/PAR-sky/2023-06-01"; 
        return this.http.get(url);
    }
}