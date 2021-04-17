export {}

// 函数类型接口

interface Func{
    (x: number, y: number): number
}

let fn: Func = (a, b) => a + b;

console.log('fn(1, 2) ====>>>>', fn(1, 2));


// 混合类型接口

interface Lib{
    (): void;
    version: string;
    doSometting(): void
}


function getLib(){
    let lib: Lib = (() => {}) as Lib;

    lib.version = '1.1.1';

    lib.doSometting = () => {
        console.log(' ====>>>>', 666);
        
    };

    return lib
}

let lib1 = getLib();

console.log('lib1.version ====>>>>', lib1.version);
lib1.doSometting()


// ------------------

// function hello(){}

// hello.v = 123;

// hello.to = function(){

// }





