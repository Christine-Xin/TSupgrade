// TS基础知识（下）

// 函数解构
type TypeStuObj ={username:string, age:number, phone:string}

function info(stuobj: TypeStuObj){
    console.log(stuobj)
}

let stuobj:TypeStuObj = {username:'ss', age:13, phone:'135'}
info(stuobj)

function subInfo({username,phone}: TypeStuObj){
    console.log(username,phone)
}

subInfo({username:'xs',phone:'135', age:15})

// 元组：

let salary :[string, number,number] = ['lisi', 100 , 100]

// TS数组和数组元素如何同时为只读
 const account =[ 10, 20, 30] as const

//  可变元组和应用场景
let [custname, age, address, ...rest] : [string, number, string, ...any[]] = [
    'wangwu',23,'yang','13545'
]
console.log('rest',rest)

// 可变元组tag
let salary1 :[name_:string, phone_: number, money_:number, ...rest_:any[]] = ['lisi', 100 , 100]


export {}