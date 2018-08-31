/*阶乘函数*/
function factorial(count){
    let re=1;
    for (let i=1;i<count;i++){
        re*=i;
    }
    return re
}
console.log(factorial(6))


/*this指向问题，此时this指向的对象不是指向window*/
var obj = {
    name: "errol",
    showname: function () {
        console.log(this.name)
    }
}
obj.showname();


/**/

function f1() {
    var tmp = 1;
    this.x = 3;
    console.log(tmp);
    console.log(this.x)
}
var obj = new f1()
console.log(obj.x)
// console.log(f1())


/*字符串反转*/
let str='123456'
str=str.split("").reverse().join("")
console.log(str)

