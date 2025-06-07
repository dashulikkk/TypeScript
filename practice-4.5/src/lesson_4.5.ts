class User {
    public userName: string;
    private surname: string;
    protected age: number;

    constructor(userName: string, surname: string, age: number) {
        this.userName = userName;
        this.surname = surname;
        this.age = age;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public getAge(): number {
        return this.age;
    }
}