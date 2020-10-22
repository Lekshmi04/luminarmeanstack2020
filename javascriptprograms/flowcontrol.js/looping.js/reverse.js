var num=123;
var rev=0;
var i;
while (num!=0) {
    i=num%10;
    rev=rev*10+i;
    num=Math.floor(num/10);
}
console.log(rev);