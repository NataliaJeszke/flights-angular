export class Passenger {
    public firstName: string;
    public lastName: string;
    public email: string;
    public phoneNumber: number;
    public address: string;

    constructor(firstName: string, lastName: string, email: string, phoneNumber: number, address: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}