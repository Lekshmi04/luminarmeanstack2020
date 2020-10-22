//i/p[5,3,4]    o/p=[]


var ar=[5,3,4]
var total=0;
for(item of ar){
    total+=item;
}
var op=[]
for(item of ar){
    element=total-item;
    op.push(element);
}
console.log(op);