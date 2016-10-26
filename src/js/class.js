export class Person{
	 constructor(_name = 'chao', _age = 12){
         this.name = _name;
         this.age = _age;
	 }
	 getName(){
	 	  return this.name;
	 }
	 getAge(){
	 	  return this.age; 
	 }
}

//===
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
**/
