export {}

// 可索引类型接口
interface StringArray{
    [index: number]: string
};

// 字符串数组
let strArr: StringArray = ["a", "b", "1", '123']

// ----------------------

// interface Names {
//     [n: string]: string;
//     // y: number
// }

// let obj: Names = {
//     name: 'sieyes',
//     job: 'web',
//     aa: '456'
// }

// -----------------------

interface Names {
    [n: string]: string;
    [x: number]: string
}

let obj = {
    name: 'sieyes',
    0: 'hello'
}

obj[0]