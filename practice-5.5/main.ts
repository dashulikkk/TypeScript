import {Stack} from "./Stack";
import {HanoiSolver} from "./TowerOfHanoi";
import {extractValue, IContainer} from "./GenericInterface";

const objCount = 5

const initialTowerWithInts = new Stack<number>();
for (let i = 0; i < objCount; i++) {
    initialTowerWithInts.push(objCount - i)
}

const towerOfHanoiInt = new HanoiSolver(initialTowerWithInts)
towerOfHanoiInt.solve()
towerOfHanoiInt.checkLastTower()

const initialTowerWithStrings = new Stack<string>();
for (let i = 0; i < objCount; i++) {
    initialTowerWithStrings.push(`${String.fromCharCode((96 + objCount) - i)}`)
}

const towerOfHanoiString = new HanoiSolver(initialTowerWithStrings)
towerOfHanoiString.solve()
towerOfHanoiString.checkLastTower()


type TestGeneric = number

const intContainer: IContainer<number> = {value: 25}
const stringContainer: IContainer<string> = {value: 'tea'}
const genericTestContainer: IContainer<TestGeneric> = {value: 100}

console.log(extractValue(intContainer))
console.log(extractValue(stringContainer))
console.log(extractValue(genericTestContainer))