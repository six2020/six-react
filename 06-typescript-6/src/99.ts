// 有一个 interface Part，现在需要编写一个工具类型，将 interface 中函数类型的名称取出来

interface Part {
    id: number;
    name: string;
    subParts: Part[];
    updatePart(newName: string): void;
}


type FuncPropertytNames<T> = {[K in keyof T]: T[K] extends Function ? K : never }[keyof T]



// ----------------------------
// type FuncPropertytNames<T> = {[K in keyof T]: T[K] extends Function ? K : never }
// {
//     id: never;
//     name: never;
//     subParts: never;
//     updatePart: "updatePart";
// }
// type T99 = FuncPropertytNames<Part>
// ----------------------------


type T99 = FuncPropertytNames<Part>

// ----------------------------
// type FuncPropertytNames<T> = {[K in keyof T]: T[K] extends Function ? K : never }[keyof T]
// never | never | never | "updatePart"

// "updatePart"

// ----------------------------