import { IObservableArray, ObservableMap, ObservableSet } from "../internal"
export declare function keys<K>(map: ObservableMap<K, any>): ReadonlyArray<K>
export declare function keys<T>(ar: IObservableArray<T>): ReadonlyArray<number>
export declare function keys<T>(set: ObservableSet<T>): ReadonlyArray<T>
export declare function keys<T extends Object>(obj: T): ReadonlyArray<PropertyKey>
export declare function values<K, T>(map: ObservableMap<K, T>): ReadonlyArray<T>
export declare function values<T>(set: ObservableSet<T>): ReadonlyArray<T>
export declare function values<T>(ar: IObservableArray<T>): ReadonlyArray<T>
export declare function values<T = any>(obj: T): ReadonlyArray<T extends object ? T[keyof T] : any>
export declare function entries<K, T>(map: ObservableMap<K, T>): ReadonlyArray<[K, T]>
export declare function entries<T>(set: ObservableSet<T>): ReadonlyArray<[T, T]>
export declare function entries<T>(ar: IObservableArray<T>): ReadonlyArray<[number, T]>
export declare function entries<T = any>(
    obj: T
): ReadonlyArray<[string, T extends object ? T[keyof T] : any]>
export declare function set<V>(
    obj: ObservableMap<PropertyKey, V>,
    values: {
        [key: string]: V
    }
): any
export declare function set<K, V>(obj: ObservableMap<K, V>, key: K, value: V): any
export declare function set<T>(obj: ObservableSet<T>, value: T): any
export declare function set<T>(obj: IObservableArray<T>, index: number, value: T): any
export declare function set<T extends Object>(
    obj: T,
    values: {
        [key: string]: any
    }
): any
export declare function set<T extends Object>(obj: T, key: PropertyKey, value: any): any
export declare function remove<K, V>(obj: ObservableMap<K, V>, key: K): any
export declare function remove<T>(obj: ObservableSet<T>, key: T): any
export declare function remove<T>(obj: IObservableArray<T>, index: number): any
export declare function remove<T extends Object>(obj: T, key: string): any
export declare function has<K>(obj: ObservableMap<K, any>, key: K): boolean
export declare function has<T>(obj: ObservableSet<T>, key: T): boolean
export declare function has<T>(obj: IObservableArray<T>, index: number): boolean
export declare function has<T extends Object>(obj: T, key: string): boolean
export declare function get<K, V>(obj: ObservableMap<K, V>, key: K): V | undefined
export declare function get<T>(obj: IObservableArray<T>, index: number): T | undefined
export declare function get<T extends Object>(obj: T, key: string): any
