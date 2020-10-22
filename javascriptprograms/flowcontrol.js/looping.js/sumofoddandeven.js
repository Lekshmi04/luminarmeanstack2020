var limit=50;
even=0;
odd=0;
var i=1;
while (i<=50) {
    if (i%2==0) {
        even=even+i;
    }
    else {
        odd=odd+i;
        
    }
    i++;

}
console.log("even=" +even);
console.log("odd=" +odd);