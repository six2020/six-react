// 泛型

// 泛型函数

function fn<T>(a: T): T{
    return a
}

fn<number>(1)
fn<string>('1')

fn(1)
fn('a')
fn(true)
fn([1, 2, 3])
fn(['a', 'b', 'c'])

// ------------------------------------

function ArrFn<T>(arg: T[]): T[]{
    return arg
}

ArrFn([1, 2, 3])
ArrFn(['a', 'b', 'c'])

// ------------------------------------



// 泛型函数类型
type Info = <T>(arg: T) => T;

let info: Info = args => args

info(1)

info<number>(123)