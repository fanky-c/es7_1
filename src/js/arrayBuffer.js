/**
  二进制数组（ArrayBuffer对象、TypedArray视图和DataView视图）
  是JavaScript操作二进制数据的一个接口。

  这个接口的原始设计目的，与WebGL项目有关。所谓WebGL，就是指浏览器与显卡之间的通信接口，
  为了满足JavaScript与显卡之间大量的、实时的数据交换，它们之间的数据通信必须是二进制的，
  而不能是传统的文本格式。



  应用场景：
     1：AJAX 
     2：Canvas 
     3：WebSocket 
     4：File（如果知道一个文件的二进制数据类型）
     5：WebGL
**/




/**
  ArrayBuffer对象 
  ArrayBuffer对象代表储存二进制数据的一段内存，它不能直接读写，
  只能通过视图（TypedArray视图和DataView视图)来读写，
  视图的作用是以指定格式解读二进制数据。


   另一种TypedArray视图，与DataView视图的一个区别是，
   它不是一个构造函数，而是一组构造函数，代表不同的数据格式。

**/




let buf = new ArrayBuffer(32);      //配一段可以存放数据的连续内存区域
let dataView = new DataView(buf);  //建立DataView视图
console.log('getUint8:'+dataView.getUint8(2));       //然后以不带符号的8位整数格式，读取第一个元素，结果得到0，因为原始内存的ArrayBuffer对象，默认所有位都是0



//ArrayBuffer实例的byteLength属性，返回所分配的内存区域的字节长度。
let buffer = new ArrayBuffer(10);
console.log('byteLength:'+buffer.byteLength)