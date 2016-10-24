//let和const的命令
//import letAndConst from './letAndConst';


//变量的解析和赋值
//import aAs from './assignmentAndresolution';

//字符串扩展
//import string from './string';

//Number扩展
//import Num from './Number';


//Array扩展
//import Arr from './Array';


//函数扩展
//import fun from './function';

//对象扩展
//import obj from './obj';

//代理层proxy（可以对外界的访问进行过滤和改写）
//import proxy from './proxy'

/**
   1,将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上
   2,修改某些Object方法的返回结果，让其变得更合理
**/
// import proxy from './reflect';

/**
   map 和 set数据格式
**/
// import mapSet from './mapAndSet'


/**
   遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。
   任何数据结构只要部署Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）
**/
//import iterator from './iterator';

import generator from './generator';


//Class类
// import Person from './class';
// let p1 = new Person();
// console.log('我的名字是：'+p1.getName()+',我的年纪是:'+p1.getAge());