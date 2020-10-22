var arr=[9,3,11,1,2]
var ar=arr.sort((i,j)=>i-j)
console.log(ar)
var low=0;
var element=12;
var upp=ar.length-1;
var flag=0;
while(low <= upp)
{
    var mid=Math.floor((low+upp)/2)
 
if(element>ar[mid])
{
    low=mid+1;
}
else if(element<ar[mid])
{
    upp=mid-1;
}
else if (element==ar[mid])
{
    flag+=1;
    break;
}

}
if(flag>0){
    console.log("element found");
}
else{
    console.log("element not found");
}


