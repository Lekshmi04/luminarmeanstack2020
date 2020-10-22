function prime(low,upp){
    
    for(var i=low;i<=upp;i++){
        var flag=0;
        for(var j=2;j<=i/2;j++){
            if(i%j==0){
             flag+=1;
             break;
            }
        }
            if(flag==0){
                console.log(i);
            
        }
    }

}
prime(1,10);