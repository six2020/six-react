// 泛型
// 泛型约束：对泛型进行约束
export {}

interface List{
    length: number
}

function fn<T extends List>(arg: T): T{
    console.log(`arg.length ====>>>>`, arg.length);
    
    return arg
}

// fn(123)

fn([1, 2, 3])
fn('abc')
fn({length: 123})