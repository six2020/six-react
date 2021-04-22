// 高级类型

export {}

// 交叉类型


interface A {
    aa(): void
}

interface B {
    bb(): void
}


let c: A & B = {
    aa(){},
    bb(){}
}