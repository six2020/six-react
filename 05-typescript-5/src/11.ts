// 高级类型

export {}

// 映射类型

interface Obj{
    a: number;
    b: string;
    c: number
}


// 可选成员
type myPartial<T> = {[K in keyof T]?: T[K]};

type myPartialObj = myPartial<Obj>


// 可读成员

type myReadonly<T> = {readonly [K in keyof T]: T[K]}

type myReadonlyObj = myReadonly<Obj>


// 抽取类型

type myPick<T, U extends keyof T> = {[P in U]: T[P]}

type myPickObj = myPick<Obj, 'a' | 'b'>


// 

type _readonly = Readonly<Obj>
