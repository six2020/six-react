// 接口的继承

interface Car {
    name: string;
    run(): void;
}

interface AMG extends Car{
    look(): void
}

// let obj: AMG = {
//     name: 'hello',
//     run(){},
//     look(){}
// }

// =========================

// 接口的多继承

interface GTR {
    color(): void
}


interface TLJ extends AMG, GTR{ }

let tlj: TLJ = {
    name: 'world',
    run(){},
    look(){},
    color(){}
}
