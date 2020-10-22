//check whether the number is primeor not//
 

var num=14;
var flag=0;
for(var i=2;i<=num/2;i++){
if(num%i==0){
     flag+=1;
     break;
     
}

}
if(flag==0){
    console.log("num is a prime");
}
else{
    console.log("num is not a prime");
}


