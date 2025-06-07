export class Stack<T>{
    private items: T[] = [];

    constructor(private capacity: number = Infinity) {}

    clear(): void {
        this.items = []
    }

    push(item: T): void {
        if (this.size() === this.capacity) {
            throw Error("Произошло переполнение стека");
        }
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    size(): number {
        return this.items.length;
    }

    peek(): T | undefined {
        return this.items[this.size() - 1];
    }
}