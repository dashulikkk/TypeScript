interface IUser {
    readonly id: number;
    userName: string;
    surname: string;
    coins?: number;
    age: number;
    addCoin(amount: number): void;
    removeCoin(amount: number): void;
    getCoins(): string;
}

interface IExtendedUser extends IUser {
    email: string;
}

class ExtendedUser implements IExtendedUser {
    readonly id: number;
    userName: string;
    surname: string;
    coins?: number;
    age: number;
    email: string;

    constructor(id: number, userName: string, surname: string, age: number, email: string, coins?: number) {
        this.id = id;
        this.userName = userName;
        this.surname = surname;
        this.age = age;
        this.email = email;
        if (coins) this.coins = coins;
    }

    addCoin(amount: number): void {
        if (this.coins === undefined) this.coins = 0;
        this.coins += amount;
    }

    removeCoin(amount: number): void {
        if (this.coins !== undefined) {
            this.coins -= amount;
        }
    }

    getCoins(): string {
        return `Количество монет: ${this.coins || 0}`;
    }
}

const john = new ExtendedUser(1, "John", "Smith", 25, "johnSmith@yandex.ru", 5);
john.addCoin(3);
console.log(john.getCoins());