function hello(){
    console.log(` ====>>>>`, 'hello');
}

// 高阶函数
function hoc(fn){
    return ()=>{
        console.log(` ====>>>>`, 'first');
        fn()
        console.log(` ====>>>>`, 'end');
    }
}


hello = hoc(hello);



