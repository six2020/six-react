// 高级类型

export {}

// 索引类型


const User = {
    id: 666,
    username: 'sieyes',
    role: 'vip',
    avatar: 'http://img.com/100*100',
    token: 'abc'
}

// ================================

// function pick(o, p){
//     return p.map(key => o[key])
// }

// ================================
// 简单的版本

// interface Obj{
//     [x: string]: any
// }

// function pick(o: Obj, p: string[]){
//     return p.map(key => o[key])
// }

// pick(User, ['id', 'role', 'abc'])

// ================================
// 索引类型

// keyof T ======>> "id" | "role" | "username" | "avatar" | "token"

function pick<T, K extends keyof T>(o: T, p: K[]): T[K][]{
    return p.map(key => o[key])
}

// pick(User, ['id', 'role', 'token',  'abc', 'xxx'])


// ----------------------------------------
// 字面量类型

// let a: 666 = 666;
// let b: 'aaaa' = 'aaaa'
// let c: 'aaa' | 1111 | 22222 = 22222


// ----------------------------------------
// keyof 索引访问操作符

// keyof T  ：类型 T 的所有公共属性构成的字面量的联合类型


// ----------------------------------------
// T[K] : 表示对象 T 的属性 K 的值所组成的字面量联合类型