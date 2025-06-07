interface Car {
	maker: string
	model: string;
	price: number;
	dynamic_1: Record<string, string>;
	dynamic_2: { [key: string]: number };
	tuple: [string, number, string];
}

type cKeys = keyof Car;
const carKey: cKeys = "model";
console.log(carKey)

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: string | number, b: string | number): string | number {
	if (typeof a === 'string' && typeof b === 'string') {
		return a + b;
	} else if (typeof a === 'number' && typeof b === 'number') {
		return a + b;
	} else {
		return a.toString() + b.toString();
	}
}

console.log(add(1, 2), add('1', 2), add(1, '2'), add('1', '2'))

type CarAllKeys = keyof Car;

type CarStringProperties = Pick<Car, Extract<keyof Car, string>>;

type CarNumberProperties = Pick<Car, Extract<keyof Car, number>>;

type CarAsString = { [K in keyof Car]: string; };

type CarDynamicProperties = Pick<Car, 'dynamic_1' | 'dynamic_2'>;

type CarTupleProperty = Pick<Car, 'tuple'>;