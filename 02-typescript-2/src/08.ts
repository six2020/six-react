// 接口

export {}

interface List{
    id: number;
    name: string;
    [x: string]: any
}

interface Result{
    data: List[]
}


function render(result: Result){
    result.data.forEach((value)=>{
        console.log('value.id ====>>>>', value.id);
        console.log('value.name ====>>>>', value.name);
    })
}

let result = {
    data: [
        {id: 1, name: 'A', sex: 0},
        {id: 2, name: 'B'},
    ]
}

// 鸭式辩型法
// render({
//     data: [
//         {id: 1, name: 'A', sex: 0},
//         {id: 2, name: 'B'},
//     ]
// })

// render(result)


// 类型断言
// render(<Result>{
//     data: [
//         {id: 1, name: 'A', sex: 0},
//         {id: 2, name: 'B'},
//     ]
// })
// render({
//     data: [
//         {id: 1, name: 'A', sex: 0},
//         {id: 2, name: 'B'},
//     ]
// } as Result)

// ==========
render({
    data: [
        {id: 1, name: 'A', sex: 0},
        {id: 2, name: 'B'},
    ]
})

