// 接口

interface List{
    id: number;
    name: string;
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
        {id: 1, name: 'A'},
        {id: 2, name: 'B'},
    ]
}


render(result)





// let data = {
//     list: [
//         {name: '', id: 1},
//         {name: '', id: 2}
//     ]
// }