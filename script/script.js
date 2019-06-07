// var a=1;
// var b=10;
// console.log(a);
// console.log(b=11);
// var b=4;//后面的变量会把前面的变量覆盖掉
// console.log(b);
// // console.log(c);
// var x=13,y="23";
// var z;
// z=x+y;//拼接，任意的数据类型都可以相加。
// console.log(z);
// num=10;
// console.log(++num);//11
// // console.log(num++);//10
// console.log(num);//11
// console.log(++num + 5);//17
// console.log(num);//12
// //  var i;
// // for(i=1;i<=10;i++){
// //     z=i;
// //     console.log(z);
// // }
//  var sum=0;
// for(m=1;m<=10;m++){
//     sum=sum+m;
// }
//    console.log(sum);
// for(var i=1;i<=10;i++){
//     for(var j=1;j<=10;j++){
//          document.write("*")
//     }
//     document.write("<br>")
// }

// for(var i=1;i<=3;i++){
//         for(var j=1;j<=Math.pow(2,i)-1;j++){
//             document.write("*");
//         }
//     document.write("<br>");
// }


    // for (var i = 1; i <= 3; i++) {
    //     for (var j = 1; j <= 3 - i; j++) {
    //         document.write(' ');
    //     }
    //     for (var k = 1; k <= 2 * i - 1; k++) {
    //         document.write("*");
    //     }
    //     document.write("<br>");
    // }



// var line=7;
// for(var i=0;i<line;i++) {
//     //前四行，每行递增两个
//     if(i<=3) {
//         for(var j=1;j<=line-i-4;j++) {
//             document.write(' ');
//         }
//         for(var j=0;j<i*2+1;j++) {
//             document.write('*');
//         }
//     } else {
//         for(var j=1;j<=i-line+4;j++) {
//             document.write(' ');
//         }
//         //i=4,打印5个
//         //i=5,打印3个
//         //i=6,打印1个
//         for(var j=(line-i)*2-1;j>0;j--) {
//             document.write('*');
//         }
//     }
//     document.write('<br />');
// }
// document.write("<table>");
//    for(var i=1;i<=10;i++){
//        document.write("<tr>");
//          for(var j=1;j<=10;j++) {
//              if (j % 2 == 0) {
//                  document.write("<td bgcolor='aqua'>" + i + "---" + j + "</td>");
//              } else {
//                  document.write("<td bgcolor='white'>" + i + "---" + j + "</td>");
//              }
//          }
//        document.write("</tr>");
//    }
// document.write("</table>");
//    document.write("<table>")
//      for(var i=1;i<=10;i++){
//          table +="<tr>";
//          for(var j=1;j<=10;j++){
//              tr +="<td>";
//              document.write('+ i + "---" + j +');
//          }
//      }
//    document.write("table");
// var i=1,j=0,sum=0;
// for(i;i<=100;){
//     sum=i+j;
//     i=j;
//     j=sum;
//     document.write(sum+"&nbsp");
// }
// var i=0.0001,h=8848,m=0,sum=0;
// for(i;i<=h;i=i*2){
//     sum=i;
//     m++;
// }
// document.write(m);
// var arr=[12,3,45,6,78,90];
// maxvalue(arr);
// function  maxvalue(arr){
//     for(var i=0;i<=arr.length;i++){
//         if(arr[i]>arr[i+1]){
//             arr[i+1]=arr[i];
//         }
//     }
//     var max=arr[arr.length-1];
//     console.log(max);
// }
//实参给形参传值,转移元素
// var arr1=[12,3,45,6,78,90];
// move(arr1);
// function move(arr1){
//     var arr2=[];
//     for(var i=0;i<=arr1.length;i++){
//         if(arr1[i]%2==0){
//              arr2.push(arr1[i]);
//         }
//     }
//     console.log(arr2);
// }
//判断特定的位置
// var arr1=[12,3,45,6,78,90];
// panduan(arr1);
// function panduan(arr1){
//     for(var i=0;i<=arr1.length;i++){
//         if(arr1[i]==6){
//             break;
//         }
//     }
//     console.log(i);
// }
//排序
// var arr1=[12,3,45,6,78,90];
// order(arr1);
// function order(arr1){
//     var num=0;
//     for(var j=0;j<=arr1.length;j++){
//         for (var i = 0; i <= arr1.length; i++) {
//             if (arr1[i] > arr1[i + 1]) {
//                 num = arr1[i + 1];
//                 arr1[i + 1] = arr1[i];
//                 arr1[i] = num;
//             }
//         }
//     }
//     console.log(arr1);
// }
// var arr1=[1,2,3,4,5];
// var arr2=[2,4,6,8,10];
// zuiValue(arr1);
// function zuiValue(arr,type){
//     // if(!type){
//     //     type=">";
//     // }
//     if (type == ">"){
//         var max=arr[0];
//         for(var i=0;i<arr.length;i++){
//             if(arr[i]<arr[i+1]){
//                 max=arr[i+1]
//             }
//         }
//         console.log(max);
//     }else if(type =="<"){
//         var min=arr[0];
//         for(var j=1;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 min=arr[j+1];
//             }
//         }
//         console.log(min);
//     }
// }
//将两个数组合并
// var arr=[1,3,5,7,9];
// newT(arr,'a','b');
// function newT(arr){
//     var arr1=[];
//     for(var i=0;i<arr.length;i++){
//         arr1[i]=arr[i];
//     }
//     arr.length=0;
//     for(var i=1;i<arguments.length;i++){
//         arr.push(arguments[i]);
//     }
//     for(var i=0;i<arr1.length;i++){
//         arr.push(arr1[i]);
//     }
//     console.log(arr);

// var arr=[1,3,5,7,9,3,1];
// function Exit(arr,value){
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]==value){
//             return ture;
//         }
//     }
//     return false;
// }
// console.log(delRepeat(arr))
// function delRepeat(arr) {
//     var newarr=[];
//     for(var i=0;i<arr.length;i++){
//         if(!Exit(arr,value)){
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }
//阶乘
// fn(5);
// function fn(sum) {
//     var z=1;
//     for(var j=sum;j>0;j--){
//         // var m=0;
//         z=z*j;
//     }
//     console.log(z);
// }
// function fn(sum) {
//     if(sum>1){
//         return sum*fn(sum-1);
//     }else{
//         return false;
//     }
// }
// document.write(fn(5));
//复制数组
// let arr=[1,23,4,5,6,[1,2,3,4]];
// console.log(fn(arr));
// function fn(arr) {
//     var arr1=[];
//    for(var i=0;i<arr.length;i++){
//        if(typeof arr[i] == "object"){
//            arr1[i]=fn(arr[i]);
//        }else{
//            arr1[i]=arr[i]
//        }
//    }
//     return arr1
// }
// arr[i]=(function fn(){
//         function ni() {
//             return
//         }
// })()
//对象
// function  Pf(name,quality,price) {
//     this.name=name;
//     this.quality=quality;;
//     this.price=price;
//     this.date=function (date) {
//         console.log(date)
//     }
// }
// let pf=new Pf("xbmy","t1",99);
// console.log(pf.date(5.24));
// var arr=["a","b","b","d"]
// var arr1=["a","b","c","d","dxy","hj","i"]
// function  Array(){
//     for(let i=0;i<arguments.length;i++){
//         this[i]=arguments[i];
//     }
//     this.length=arguments.length;//下面用到长度，给this一个长度进行初始化
//     this.push=function(){
//         for(let i=0;i<arguments.length;i++){
//             this[this.length]=arguments[i];
//             this.length++;
//         }
//     }
//     this.maxValue=function(){
//         let max=this[0];
//         for(let i=0;i<this.length;i++){
//             if(max<this[i]){
//                 max=this[i];
//             }
//         }
//         return max;
//     }
//     this.firstA=function(value){
//         for(let i=0;i<this.length;i++){
//             if(this[i]==value){
//                 return i;
//             }
//         }
//         return no;
//     }
//     this.add=function(){
//         let num=[];
//         for(var i=0;i<this.length;i++){
//             num[i]=this[i]*2
//         }
//         return num;
//     }
//     // this.hd=function (click) {
//     //     let rga=new Array();
//     //     for(let i=0;i<this.length;i++){
//     //         rga.push(click(this[i]))
//     //     }
//     //     return rga;
//     // }
//     // this.filter=function (callback){
//     //     // let rgb=new Array();
//     //     let num=[];
//     //     for(let i=0;i<this.length;i++){
//     //         num[i]=callback(this[i])
//     //     }
//     //     return num;
//     // }
//     this.some=function (callback1) {
//         let hh;
//         for(let i=0;i<this.length;i++){
//              hh=callback1(this[i])
//         }
//         return hh;
//     }
// }
// let arr1=new Array(1,23,54,62);
// arr1.push(1,2,3)
// console.log(arr1.push(1,2));
// arr1.maxValue();
// console.log(arr1.maxValue());
// console.log(arr1.add());
// console.log(arr1.firstA(23));
// console.log(arr1.hd(function (value) {
//     return value * 2;
// }));
// let jg=arr1.some(function (value) {
//     if(value>0){
//         return true;
//     }else if(value<0){
//         return false;
//     }else{
//         return 0;
//     }
// })
// console.log(jg);
//原型对象
// function Person() {
//
// }
// Person.prototype={
//     name:"navi",
//     age:17
// }
// let person=new Person();
// console.log(person.age);
// function Person(name,age,sex){
//     this.name=name;
//     this.age=age;
//     this.sex=sex;
//     this.play=function () {
//         console.log("构造函数定义的play方法");
//     }
// }
// Person.prototype={
//     kk:function () {
//         console.log(this);
//     }
// }
// Person.prototype.play=function () {
//     console.log("构造函数的原型对象定义的play方法");
// }
// function  Student(nianji) {
//     this.nianji=nianji;
//     this.rap=function () {
//         console.log(this);
//     }
// }
//
// let zs=new Person("张三",18,"男");
// let ls=new Student("四年级");
// console.log(zs.kk());
// console.log(ls.rap());
// console.log(zs);
// zs.play.call(ls)
// console.log(zs.play());
//pop方法
// let arr=[1,3,5,7]
// console.log(arr.pop());
// console.log(arr);
//console.log(arr.constructor);
// console.log(Array.prototype);
//map()方法
// function f(arr) {
//     let ARY=[];
//     ARY=arr.map(function fn(value){
//         return value*2;
//     });
//     console.log(ARY);
// }
// console.log(f(arr));
// let arr=[1,23,4,5,5]
// function suiji(arr,value){
//     let arr1=[]
//     for(let i=0;i<value;i++){
//         let index=Math.floor(Math.random()*arr.length)
//         while (arr1.includes(arr[index])){
//             index=Math.floor(Math.random()*arr.length)
//         }
//         arr1.push(arr[index]);
//     }
//     return arr1;
// }
// console.log(suiji(arr, 2));
console.log(String.prototype);
//sub 显示为下标
var str="Hello World!,dd,gg";
var str1="dxy.jkl.png";
document.write("PPPP"+str.sub());
//sup  显示为上标
document.write("pppp"+str.sup());
document.write("<br>")
//link 显示为超链接
document.write(str.link());
document.write("<br>")
//fixed 显示为打字机字体
document.write(str.fixed())
//bold 显示为粗体
document.write("<br>")
document.write(str.bold())
//italics 斜体
document.write("<br>")
document.write(str.italics())
//strike 加删除线
document.write("<br>")
document.write(str.strike())
//fontcolor 设置string颜色
document.write("<br>")
document.write(str.fontcolor(origin))
//anchor 创建html锚 参数为必填项 ，anchor(anchorname)
document.write("<br>")
document.write(str.anchor("test"));
//判断字符串中是否出现某个字符
console.log(str.indexOf("e"));
//计算字符串中字符的个数
console.log(str.split("").length);
//获取参数的后缀
console.log(str1.slice(str1.lastIndexOf(".")));
//字符串首字母大写
function daxie(str,char){
    if(str.charAt(0)!=char){
        return str.replace(str.charAt(0),char);
    }else{
        return "首字母已经大写！"
    }
}
console.log(daxie(str, "H"));
//将指定的字符进行替换
function change(str,char1,char2) {
    let arr=[];
    arr=str.split("");
    for(let i=0;i<arr.length;i++){
        if(char1==arr[i]){
            str=str.replace(char1,char2);
        }
    }
    return str;
}
console.log(change(str, "l", "m"));
//将字符串翻转
function fz(str){
    let arr=[];
    let arr1=[];
    let Str;
    arr=str.split(",");
    arr1=arr.reverse();
    Str=arr1.join();
    return Str;
}
console.log(fz(str));
//比较两个字符串的大小
console.log(str>str1)
//每个字符出现的次数
function cs(str,char) {
    let arr=[];
    let sum=0;
    arr=str.split("");
    for(let i=0;i<arr.length;i++){
        if(char == arr[i]){
            sum=sum+1;
        }
    }
    return sum;
}
console.log(cs(str, "l"));

