// 装饰器
// 类装饰器、属性装饰器、方法装饰器、参数装饰器




//  =================== 类装饰器 =================== 


// const ddd: ClassDecorator = (target) => {
//     console.log(` ====>>>>`, 'hello');

//     console.log(`target ====>>>>`, target);

//     target.prototype.run = function(){
//         console.log(` ====>>>>`, '跑了');

//     }

//     target.prototype.name = 'sieyes'
// }

// 装饰器工场
const ddd = (a: string): ClassDecorator => (target) => {
    target.prototype.run = function () {
        console.log(` ====>>>>`, '跑了');

    }

    target.prototype.name = a
}


@ddd('sieyes~~')
// @ddd
class D {

}

let d = new D();

(d as any).run()

console.log(`(d as any).name ====>>>>`, (d as any).name);
