

// enum Gender{
//     Male,
//     Female
// }


// let gender: Gender = Gender.Male;

// console.log('gender ====>>>>', gender);

// console.log('Gender[0] ====>>>>', Gender[0]);


enum Weeks{Mon = 1, Tue, Wed}

let day:Weeks = Weeks.Mon;

console.log( day );             // 1
console.log( Weeks[0] );        // undefined
console.log( Weeks[1] );        // "mon"
console.log( Weeks["Mon"] );    // 1


// 字符串枚举

enum Message {
    Success = '恭喜，成功了',
    Fail = '抱歉，失败了'
};

let msg: Message = Message.Success;

console.log('msg ====>>>>', msg);


// 异构枚举

// enum Isomerism{
//     N,
//     Y = 'yes'
// };

// 常量枚举
// const enum Month{
//     Jan,
//     Feb,
//     Mar
// }

// let m:Month = Month.Jan;

// 枚举的成员

enum Char{
    // 常量枚举成员 const enum
    a,          // 无初始值
    b = Char.a, // 对已有枚举成员的引用
    c = 1 + 2,  // 表达式

    // 计算枚举成员 computed enum
    d = Math.random(),
    e = [1, 2, 3].length,
    f = 4,
    // g = 'hello'
}

// 枚举成员只读
// Char.c = 100;   // err、


// enum C {
//     a,
//     b
// }
// let num: C.a = 0;