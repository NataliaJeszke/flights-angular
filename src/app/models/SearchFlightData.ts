export interface SearchFlightData {
    departureInput: string;
    arrivalInput: string;
    dateDepartureInput: string;
    formatDepartureDateUnix(): number;  
}