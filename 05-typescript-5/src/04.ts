// 类型兼容性

export {}


// 枚举的兼容性

enum System {Linux, Windows}

let s: System.Linux = 666;
let n: number = System.Linux;

enum Color {Red, Bule}

// let c: Color.Red = System.Linux
