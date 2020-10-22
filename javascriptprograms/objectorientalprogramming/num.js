//var arr=[10,9,8,11,2,3,4]
//var output=[]
//for(num of arr){
  //  if(num>5)
  //      output.push(num+1);
  //  else
   //     output.push(num-1);
    
//}
//console.log("output="+output);


var input="hey"
var output=""
for(var i=0;i<input.length;i++){
    for(var j=0;j<=i;j++){
        output+=input[i];
    }
}
console.log(output)