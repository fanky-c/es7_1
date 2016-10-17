class Person{
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

export default Person;