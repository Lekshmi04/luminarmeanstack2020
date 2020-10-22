var arr=[2,1,3,4,]
for(num1 of arr){
    for(num2 of arr){
        var sarr=arr.sort((num1,num2)=>num1-num2)
        
    }
}
console.log(sarr);
var low=0;
var upp=sarr.length-1;
var element=6;
while(low<upp){
    if(res=sarr[low]+sarr[upp]){
        if(res==element){
           console.log("pairs="+sarr[low] + "," + sarr[upp]);
           break;
        }
        else{
            low+=1;
        }
    }
}