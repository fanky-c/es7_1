var obj = {};

Object.defineProperty(obj , 'hello' , {
  get : function (){
    return 'chao'
  },
  set : function(val){
    return val;
  }
})

console.log('defineProperty:' , obj.hello);



var obj1 = {};
Object.defineProperty(obj1 , 'test' , {
   set : function(newVal){
     document.getElementById('test2').innerHTML = newVal;
   }
})

document.getElementById('test').addEventListener('keyup' , function(e){
  obj1.test = e.target.value;
} , false)





var userInfo = {};

Object.defineProperty(userInfo , 'nickName' , {
  get : function(){
    return document.getElementById('nickName').innerHTML;
  },
  set : function(nick){
    document.getElementById('nickName').innerHTML = nick;
  }
})

Object.defineProperty(userInfo , 'introduce' , {
  get : function(){
    return document.getElementById('introduce').innerHTML;
  },
  set : function(introduce){
    document.getElementById('introduce').innerHTML = introduce;
  }
})

document.getElementById('btn').onclick = function(){
  userInfo.nickName = 'fanky';
  userInfo.introduce = '我是谁，你是谁！！！'
}




