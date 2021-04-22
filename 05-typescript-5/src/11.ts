// 高级类型

export {}

// 映射类型

interface Obj{
    a: number;
    b: number;
    c: number
}



type myPartial<T> = {[K in keyof T]?: T[K]};

type myPartialObj = myPartial<Obj>