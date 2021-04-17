// 类类型的接口
export {}


interface Car{
    // new (name: string): void
    name: string;
    run(): void;
}


// 类实现接口
// 接口只能约束类的共有成员
// 接口是不能够约束构造函数的

class GTR implements Car{
    // static name: string;
    // private name: string;
    public name: string

    constructor(name: string){
        this.name = name
    }

    run(){
        console.log(` ====>>>>`, 'ccc');
    }
}