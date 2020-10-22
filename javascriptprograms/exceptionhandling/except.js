var num1=10;
var num2=0;
try{
    if(num2==0) throw "division by zero"
    var res=num1/num2;
console.log(res);
}
catch(err){
    console.log(err);
}
//finally{
 //   console.log("inside finally block");
//}
