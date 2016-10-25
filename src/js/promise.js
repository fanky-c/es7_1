/**
  Promise对象有以下两个特点:
  
  1:对象的状态不受外界影响。Promise对象代表一个异步操作，
  有三种状态：Pending（进行中）、Resolved（已完成，又称Fulfilled）和Rejected（已失败）。

  
  2:一旦状态改变，就不会再变，任何时候都可以得到这个结果。

  缺点：
  Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。
  其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
  第三，当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
**/

// var promise = new Promise(function(resolve,reject){
    
// });

// promise.then(function(value){
// 	 // success
// 	 alert('success');
// },function(error){
//      // failure
//      alert('error');
// })



// function timeout(ms){
// 	  return new Promise((resolve,reject) => {
// 	  	   setTimeout(resolve,ms,'done');
// 	  });
// };

// timeout(1000).then((value) => {
// 	   console.log(value)
// },(error) => {
// 	   console.log('error');
// })


//异步加载图片(如果加载成功，就调用resolve方法，否则就调用reject方法。)
 let loadImageAsync = (src) => {
	  return new Promise((resolve,reject) => {
	  	  let image = new Image();

	  	  image.onload = function(){
	  	  	 resolve(image) 
	  	  }

	  	  image.error = function(){
	  	  	 reject(new Error('Could not load image at ' + url));
	  	  }

	  	  image.src = src;
	  })
}

let src = 'http://img1.gtimg.com/sports/pics/hv1/75/40/2145/139488900.jpg';
loadImageAsync(src).then((value) => {
    console.log('加载成功:'+value.src); 	 
},(error) =>{
	console.log('error');  
});


//用Promise对象实现的Ajax操作的例子(json)
let getJSON = (url) => {
     return new Promise((resolve,reject) =>{
          var client = new XMLHttpRequest();
          client.open('GET',url);
          client.onreadystatechange = hanlder;
          client.responseType = 'json';
          client.setRequestHeader('Accept','application/json');
          client.send();

          function hanlder(){
          	  if(this.readyState !== 4){
                   return;
          	  }

          	  if(this.status === 200){
                  resolve(this.response);  
          	  }else{
          	  	  reject(new Error(this.statusText));
          	  }
          }
     })
}


getJSON().then((json)=>{
    console.log('加载成功：'+json)
},(error)=>{
    console.log('error');
})