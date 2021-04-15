// 基础类型

let a: number = 123;
// a = 'a'
let b: string = '123';
let c: boolean = false;

let un: undefined = undefined;
// let un1: undefined = void 0;
// let un2: undefined =(()=>undefined)()

let nu: null = null;

// a = undefined;
// b = null;

// =====================================

let obj1: object = {a: 1, b: 2};    // ok

let obj2: object = [1, 'a'];        // ok

let obj3: object = function(){};    // ok


enum Direction {
    Center = 1
}

let obj: object = Direction;



// ======================

// let obj4: {a: number, b: string} = {a: 123, b: '123'}