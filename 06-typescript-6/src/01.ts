// 高级类型

export {}

// 条件类型

//  T extends U ? X : Y

//  fn(boolean) true ==> string   false ==> number

declare function fn<T extends boolean>(arg: T): T extends true ? string : number;

let a = fn(Math.random() < 0.5)
let b = fn(true)
let c = fn(false)
// let d = fn(1)


parseInt('')

// =================================================


// type fn1 = () => {}

// fn1()

// =================================================

// 分布式的有条件类型 --> 必要条件， 泛型参数必须是裸类型
// boolean ==> "YES"   ==> "NO"

type NakeUsage<T> = T extends boolean ? "YSE" : "NO"

type Distributed = NakeUsage<string | number | true>

// NakeUsage<string> | NakeUsage<number> | NakeUsage<true>
// "NO" | "YSE"


// 裸类型参数

type NakeUsage1<T> = [T] extends [boolean] ? "YSE" : "NO"

type Distributed1 = NakeUsage1<string | number | true>


// =================================================

// 类型筛选：


// <'a' | 'b' | 'c' | 'd'>  -  <'a' | 'c'>    -->  <'b' | 'd'>

type Diff<T, U> = T extends U ? never : T;
                //T extends null | undefined ? never : T

type T1 = Diff<'a' | 'b' | 'c' | 'd',   'a' | 'c'>

type T4 = Extract<'a' | 'b' | 'c' | 'd',   'a' | 'c'>


// Diff<'a',   'a' | 'c'>  |  Diff<'b',   'a' | 'c'>  |  Diff<'c',   'a' | 'c'>  |  Diff<'d',   'a' | 'c'> 

// never | 'b' | never | 'd'

//  "b" | "d"

// =================================================

// <number | string | null | undefined>  ==> <number | string>


type NonNullable2<T> = Diff<T,  null | undefined>;

type T2 = NonNullable2<number | string | null | undefined>


// ------------------------------------------------------

// type T3 =  Diff<number | string | null | undefined,   null | undefined>