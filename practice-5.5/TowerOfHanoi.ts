import {Stack} from './Stack'

type Tower<T> = {
    name: number,
    stack: Stack<T>
}

export class HanoiSolver<T>{
    private readonly towers: Tower<T>[];
    private readonly objCount: number;

    constructor(firstTower: Stack<T>) {
        this.towers = [{name: 1, stack: firstTower},
            {name: 2, stack: new Stack<T>()},
            {name: 3, stack: new Stack<T>()}
        ]
        this.objCount = firstTower.size()
    }

    public solve(n: number = this.objCount,
                 from: Tower<T> = this.towers[0],
                 to: Tower<T> = this.towers[2],
                 idle: Tower<T> = this.towers[1]): void {
        if (n == 0) {
            return;
        }

        this.solve(n - 1, from, idle, to)
        let movedObj = from.stack.pop();
        if (movedObj !== undefined) {
            to.stack.push(movedObj);
            console.log(`Объект ${movedObj} перемещен из башни ${from.name} -> в башню -> ${to.name}`);
        } else {
            throw new Error("Попытка переместить несуществующий объект");
        }

    }

    public checkLastTower(): void {
        const tower: Array<T | undefined> = []
        for (let i = 0; i < this.objCount; i++) {
            tower.push(this.towers[2].stack.pop())
        }
        console.log(`Последняя башня - ${tower}`)
    }

}