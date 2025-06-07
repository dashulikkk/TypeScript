export interface IContainer<T> {
    value: T
}

export function extractValue<T>(container: IContainer<T>): T {
    return container.value
}