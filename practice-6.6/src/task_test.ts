export {};

interface Car {
    maker: string;
    model: string;
    price: number;
    dynamic_1: Record<string, string>;
    dynamic_2: { [key: string]: number };
    tuple: [string, number, string];
}

type CarKeys = keyof Car;

const carKey: CarKeys = "model";
console.log(carKey);

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: string | number, b: string | number): string | number {
    return a.toString() + b.toString();
}

console.log(add(10, 20));
console.log(add("Car: ", "Tesla"));
console.log(add("Price: ", 30000));
console.log(add(42, " km/h"));

const carProperties: CarKeys[] = ["model", "price", "dynamic_1", "dynamic_2", "tuple"];
console.log(carProperties);

const car: Car = {
    maker: "Tesla",
    model: "Tesla Model 3",
    price: 39999,
    dynamic_1: {
        color: "red",
        owner: "John",
        license: "ABC123",
    },
    dynamic_2: {
        mileage: 15000,
        year: 2022,
        warranty: 5,
    },
    tuple: ["Electric", 2023, "Tesla"],
};

console.log(car);