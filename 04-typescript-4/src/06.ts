// 泛型
// 泛型类


class Cli<T>{
    run(a: T): T{

        this.eat<number>(123)

        return a
    }

    // static look(a: T){}

    private run1(a: T){

    }

    eat<U>(a: U){

    }
}

let cli = new Cli<number>()


cli.run(123)
// cli.run("123")   // err