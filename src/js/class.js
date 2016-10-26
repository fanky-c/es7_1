//es6
export class Person{
	 constructor(_name = 'chao', _age = 12){
         this.name = _name;
         this.age = _age;
	 }

	 static myAge(){
	 	  return '我也不知道是男还是女';   //加上static关键字，就表示该方法不会被实例继承，
	 	                                   //而是直接通过类来调用，这就称为“静态方法”。
	 	                                   //父类的静态方法，可以被子类继承。
	 	                                   //Person.myAge()  
	 	                                   //new Person().myAge()是错误
	 }

	 getName(){
	 	  return this.name;
	 }

	 getAge(){
	 	  return this.age; 
	 }
}

//===  es5
export function Person1(name,age){
     this.name = name;
     this.age = age;
}

Person1.prototype = {
	getName:function(){
		return this.name; 
	},
	getAge:function(){
        return this.age; 
	}  
}

/**
  Class的继承
  子类必须在constructor方法中调用super方法，否则新建实例时会报错。
  这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。
  如果不调用super方法，子类就得不到this对象。   
**/
export class ColorPoint extends Person{
    constructor(x,y,color){
        super(x,y); //调用父类的constructor(x, y) 必须放在this之前
        this.color = color;
    }
    getColor(){
    	return this.color;
    }
}



/***
   Mixin模式的实现
   Mixin模式指的是，将多个类的接口“混入”（mix in）另一个类。它在ES6的实现如下 
**/

function mix(...mixins){
   class Mix{};

   for(let mixin of mixins){
      copyProperties(Mix,mixin);
      copyProperties(Mix.prototype,mixin.prototype);
   }

   return Mix;
}

function copyProperties(target,source){
     for(let key of Reflect.ownKeys(source)){
         if(key !== 'constructor' && key !== 'prototype' && key !== 'name'){
              let desc = Object.getOwnPropertyDescriptor(source,key);
              Object.defineProperty(target,key,desc);
         }
     }
}


class C1{
   
}

class C2{
    get prop(){
         return 'getter';
    }
    set prop(val){
    	 console.log('setter:'+val)
    }	  
}

export class DistributedEdit extends mix(C1,C2){
    
}