// 类型守卫

export {}


class Person{
    name = 'sieyes'
    age = 12
}

class Animal{
    name = 'hello'
    color = 'yellow'
}

// ================================================

// function getSometing(arg: Person | Animal){
//     if((arg as Person).age){
//         (arg as Person).age
//     }else{
//         (arg as Animal).color
//     }
// }


// ================================================

// instanceof

// function getSometing(arg: Person | Animal){
//     if(arg instanceof Person){
//         arg.age
//         // arg.color
//     }else{
//         arg.color
//         // arg.age
//     }
// }


// ================================================

// in

// function getSometing(arg: Person | Animal){
//     if('age' in arg){
//         arg.age
//         // arg.color
//     }else{
//         arg.color
//         // arg.age
//     }
// }


// ================================================

// is : 类型的保护函数： 创建一个类型保护函数类判断对象的类型

function isPerson(arg: Person | Animal): arg is Person{
    return (arg as Person).age !== undefined
}

function getSometing(arg: Person | Animal){
    if(isPerson(arg)){
        arg.age
        // arg.color
    }else{
        arg.color
        // arg.age
    }
}


// typeof
// 基础类型守卫

function fn(a: number | string){
    if(typeof a === "number"){
        a.toFixed()
    }else{
        a.charAt(0)
    }
}