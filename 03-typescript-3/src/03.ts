export{}

// 函数重载

function add(...result: number[]): number;
function add(...result: string[]): string;
function add(...result: any[]): any{
    if(typeof result[0] === "number"){
        return result.reduce((p, c)=>p+c)
    }

    if(typeof result[0] === "string"){
        return result.join("-")
    }
}

console.log(` add(1, 2, 3, 4, 5)====>>>>`, add(1, 2, 3, 4, 5));

console.log(` add('a', 'b', 'c')====>>>>`, add('a', 'b', 'c'));



