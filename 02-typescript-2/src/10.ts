export {}

interface List{
    readonly id: number;
    name: string;
    age?: number
}

interface Result{
    data: List[]
}


function render(result: Result){
    result.data.forEach((value)=>{
        console.log('value.id ====>>>>', value.id);
        console.log('value.name ====>>>>', value.name);

        if(value.age) console.log('value.age ====>>>>', value.age);

        // value.id ++
    })
}

let result = {
    data: [
        {id: 1, name: 'A'},
        {id: 2, name: 'B'},
    ]
}


render(result)