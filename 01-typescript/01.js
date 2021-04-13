
// let a = 123;

// a = false;

// a = 'abc';

// console.log(' ====>>>>', typeof a);

// ========

// let obg  = {};

// obg.fn()

// =======

function sum(a, b){

    if(a === void 0 || typeof a !== "number"){
        throw new Error('请正确传入参数！')
    }

    return a+b
}

// console.log(' ====>>>>',  sum(9, 9));
console.log(' ====>>>>',  sum('abc', 9));



