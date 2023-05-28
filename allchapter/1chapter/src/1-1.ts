// TS基础知识（上）

// 类型注解： 刚开始就定义好
let str:string = "abc";

let arr: number[] = [3,4,5]; //数字数组

// 类型推导: 值推导类型
let money = 30;
// money = '123'

// 常用的24种ts 类型
/**
 * 基本类型：
 * number, string, boolean, symbol, null, undefined
 * 根类型：
 * object, {}
 * 对象类型：
 * Array, object, function
 * 枚举：
 * enum
 * 其他特殊类型：
 * any, unknown, never, void, 元组（tuple）,可变元组
 * 合成类型：
 * 联合类型，交叉类型
 * 字面量数据类型：
 * 
 */

// 联合类型 |
let a:string | number ="abc"

// 交叉类型 &
let b :{name: string}={name: 'zc'}
let c:{age:number} ={age: 18}
// 如何联合b c， 则需要使用type
type obj1={name: string}
type obj2 ={age:number}
let obj1: obj1={name: 'zc'}
let obj2: obj2 = {age: 18}
let obj3: obj1 & obj2 ={name: 'zx',age: 12}

// 字面量数据类型
type num = 1|2|3

// never类型
// 使用never避免出现未来扩展新的类没有对应类型的实现

// 枚举类型
/**
 *使用常量带来的局限性：方法参数不能定义为具体类型，只能初级使用number,string基本类型替代，降低了代码的可读性和可维护性
    枚举好处：
    1：有默认值和可以自增值，节省编码时间 2： 语义更清晰，可读性增强
 */
enum WeekEnd {
    Monday=1,
    Tuesday,
    Wensday,
    ThirsDay,
    Friday,
    Sarturday,
    Sunday
}
console.log(WeekEnd["Monday"], WeekEnd.Monday, WeekEnd[1])

// 接口和应用场景
/**
 * 接口优点：新的接口只是在原来的接口继承之上增加了一些属性或方法，这时就用接口继承
 * 应用场景：
 * 1：一些第三方包或者框架底层源码中有大量的接口类型
 * 2：提供方法的对象类型的参数时使用
 * 3：为多个同类别的类提供统一的方法和属性声明
 */
interface Product{
    name: string,
    price: number,
    account:number,
    buy():void
}
interface phone extends Product{
    number: string
}

let p: Product={
    name:'zc',
    price:100,
    account:10,
    buy(){

    }
}

// 可索引签名
interface Person {
    name:string,
    [x:string]:any
}

let zx:Person = {
    name:'zc',
    descri1: 'okokoko'
}

// 索引访问
const symid = Symbol("production")
interface Animal {
    [symid]:number,
    name:string
}

type A = Animal[typeof symid]

type AnimalKeys = keyof Animal //"name" | typeof symid

// type AllKeys<T> = T extends any? T:never
// type AnimalKeys = AllKeys<keyof Animal>

// TS函数， rest 参数

let info = function (name:string, age:number, ...rest:any) {
    return 3
}

export{}