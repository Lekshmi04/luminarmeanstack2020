f1=(num1,num2)=>(num1+num2);
console.log(f1(10,20));
f2=(num1,num2)=>(num1-num2);
console.log(f2(20,10));
f3=(num1,num2)=>(num1*num2);
console.log(f3(10,20));
f4=(num1,num2)=>(num1/num2);
console.log(f4(20,10));
var arr=[1,2,3,4,5]
var output=[]
for(num of arr){
    
    output.push(num**2)
    
}
console.log(output);
var squares=arr.map(num=>num**2);
console.log(squares);
var evens=arr.filter(num=>num%2==0);
console.log(evens);

var names=["ajay","abi","anu","bincy","bijoy"]
var upper=names.map(names=>names.toUpperCase());
console.log(upper);
var alpha=names.filter(names=>names.charAt(0)=='a');
console.log(alpha);
var arr=[1,2,3,4,5,6,7]
var total=arr.reduce((num1,num2)=>num1+num2);
console.log(total)