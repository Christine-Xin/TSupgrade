// TS静态成员，方法拦截器实战
class People {
    name: string
    age: number
    addr:string
    static count: number = 10
    constructor(_name:string, _age:number, _addr: string){
        this.name = _name
        this.age = _age
        this.addr = _addr
    }
    doEat(who:string, where:string){
        console.log(`who: ${who}, where: ${where}`)
    }
    doStep(){

    }
}
// 方法拦截器
const dataProp1= Object.getOwnPropertyDescriptor(People.prototype, "doEat")
const targetMethod = dataProp1!.value;
dataProp1!.value = function(...args: any[]){
    console.log("前置拦截...")
    targetMethod.apply(this, args)
    console.log("后置拦截...")
}

Object.defineProperty(People.prototype, "doEat", dataProp1)
let p = new People("peter", 23 , '公主坟')
p.doEat("zs","王府井")
export{}