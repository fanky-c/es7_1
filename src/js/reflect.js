console.log('assign' in Object)  //es5 
console.log(Reflect.has(Object,'assign'));//es6

console.log(Function.prototype.apply.call(Math.floor,null,[1.75]))  //es5
console.log(Reflect.apply(Math.floor,null,[2.01]))  //es6