// ts 中拥有的类型

// 1. 基础类型

// 数字 字符串 布尔类型

//  冒号后面的  : 都是类型  等号= 后面的都是赋的值

let num:number = 10;
let str:string = 'zf';
let bool:boolean = true;

// 元组 表示长度和个数（内容存放类型）都限制好了

let tuple:[string, boolean, number] = ['zf', true, 11];
// 可以向元组中添加内容，不能通过索引来添加属性 tuple[4] = 2 [错误示范]
// 只能放入元组中已经声明过的类型
tuple.push(true);

// 数组 存放一类类型的集合
let arr1:number[] = [1,2,3];
let arr2:string[] = ['ster', 'dsda'];

// 联合类型可以看作并集 既能使用数字，又能使用字符串
let arr3:(number|string)[] = [1,2,'5435'];
let arr4:Array<number | string> = [1,2,'434'];
// let arr5:any[]=[2,'43',true] 什么都能放

// 枚举类型
enum USER_ROLE {
  USER, // 默认下标从0开始
  ADMIN=1,
  MANAGER
}
console.log(USER_ROLE.USER, USER_ROLE[0]); //0
// 编译成js就是 给 {}['user'] = 0 obj['admin'] = 1
//USER_ROLE[USER_ROLE["USER"] = 0] = "USER" 正向反向都赋值

// 异构枚举 可以在枚举中放不同的类型,但不能反取USER_ROLE['a']
enum USER_ROLE2 {
  USER='a', 
  ADMIN=1,
  MANAGER  //上一个是1 下一个自动推断是2
}
console.log(USER_ROLE2.USER); // a

// 常量枚举const enum 只是提供了一个值，没有生成对象
const enum USER_ROLE3 {
  USER,
  ADMIN
}
console.log(USER_ROLE3.USER); //编译成console.log(0 /* USER_ROLE3.USER */);  语义化
// 不可以反取USER_ROLE3[0]，因为没有生成对象

// null 和 undefined
// 任何类型的子类型 在严格模式(strict: true)下，只能将null 和undefined赋予给null undef

let str2:number | string ;
let u:undefined;
u = undefined

// void 空类型 只能接受 null和undefined。用处： 函数的返回值
// 函数的默认返回值是undefined所以赋值undefined不报错
// 默认在严格模式下不能将null赋给void
let v:void;
// v=null; //严格模式下 会报错 
v=undefined;

function a():void {
  return undefined;
  // return null;
}

// never类型 永远不 是任何类型的子类型 可以将never赋予给任何类型
// 永远达不到的情况有三种 1)错误  2)死循环  3）类型判断时会出现never
// let n:never;
// str =n;
function myError():never {
  throw new Error("");
}
function whileTrue():never {
  while (true) {
    
  }
}
// let n:never = myError();

// 对象类型 非原始数据类型 object
let create = (obj:object)=>{

}
// create(1); //基本类型 不可以传给object
create([]);
create({});
create(function() {
  
})

let name = '2'; //默认全局就有name
export {} //加上这句 可以隔离模块间的干扰