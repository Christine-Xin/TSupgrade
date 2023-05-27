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
