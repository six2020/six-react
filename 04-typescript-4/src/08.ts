// 类型检查机制


// 基础的类型推断
let a;

let b = 1;

let c = 'a';

// let arr = []
let arr = [1, 2]


// 最佳通用类型推断
let arr1 = [1, 'a']


// 上下文类型推断

document.onclick = function(e){
    e.pageX;
    // e.key
}

document.onkeydown = function(e){
    e.key;
    // e.pageX
}