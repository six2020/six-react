// 接口继承类

export {};

class Car{
    static prop: number
    public name: string = 'hello'
    private a: string = 'a'
    protected b: string = 'b'

}


// interface GTR {
//     name: string
// }

interface GTR extends Car{}

// let gtr: GTR = {name: 'abc', b: '132', a: 'a'}



// class TLG implements GTR{}

class RT3R extends Car implements GTR{}

