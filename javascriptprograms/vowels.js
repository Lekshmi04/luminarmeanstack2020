var s="javascript";
var vowels=["a","e","i","o","u"];
var arr=s.split("");
//for(v of arr){
 //   if(vowels.includes(v)){
  //      console.log(v);
  //  }
////}
//for(v of arr){
 //   if(!vowels.includes(v)){
  //      console.log(v);
  //  }
//}
var out=arr.filter(char=>vowels.includes(char));
console.log(out);
var out=arr.filter(char=>!vowels.includes(char));
console.log(out);

