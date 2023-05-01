export class Passenger {
    public firstName?: string;
    public lastName?: string;
    public email?: string;
    public phoneNumber?: number;
    public address?: string;
    public numberOfPassengers?: number;
    public carryOnBaggage?: boolean;
    public checkedBaggage?: boolean;

    constructor(firstName: string, lastName: string, email: string, phoneNumber: number, address: string, numberOfPassengers: number, carryOnBaggage: boolean, checkedBaggage: boolean ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.numberOfPassengers = numberOfPassengers;
        this.carryOnBaggage = carryOnBaggage;
        this.checkedBaggage = checkedBaggage;
    }
}