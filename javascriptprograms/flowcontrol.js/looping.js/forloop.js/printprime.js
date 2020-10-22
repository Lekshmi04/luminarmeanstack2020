//print prime number between 10 to 50//

for( var num=10;num<=50;num++) {
    var flag=0;
    for(var i=2;i<=num/2;i++){
        if(num%i==0){
            flag+=1;
            break;
        }
        else{
            flag=0;
        }
    }

if(flag==0 && num!=0){
console.log(num);
}
}
