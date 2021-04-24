// infer


type Foo = () => number;

type myReturntype<T> = T extends (...arg: any[]) => infer P ? P : any;

type Tty = myReturntype<Foo>

Array

// -----------------------------------------


// [string, number] ---->  string | number

type ElementOf<T> = T extends Array<infer E> ? E : never;

type TTuple = [string, number];

type  ToUnion = ElementOf<TTuple>
