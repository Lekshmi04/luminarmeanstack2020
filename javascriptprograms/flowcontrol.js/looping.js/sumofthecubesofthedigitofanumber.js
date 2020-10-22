var num=153;
var sum=0;
var i;

while(num>0){
     i=num%10;
     sum=sum+(i**3);
     num=Math.floor(num/10);
     
    
}
console.log(sum);
