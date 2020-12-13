export class User {
    id: number;
    userNumber: number;
    userName: string;

    constructor(number: number, name: string) {
        this.userNumber = number;
        this.userName = name;
    }
}