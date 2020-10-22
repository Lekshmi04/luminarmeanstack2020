var data = "hello hai hello jai hai hello jai jai jai";
var words = data.split(" ")
console.log(words);
var obj = {}
for (word of words) {
    if (word in obj) {
        obj[word] += 1;
    }
    else {
        obj[word] = 1;
    }
}
console.log(obj);

var arr=[]
for(key in obj){
    var num=obj[key];
    arr.push(num);
    
}
var srt=arr.sort((a,b)=>b-a)
console.log(srt)
var element=srt[0];
for(key in obj){
    if(element==obj[key]){
        console.log(key)
    }
}


//var inp="HHHPPSDAAA"
var words=inp.split("")
console.log(words)
var output=""
var obj={}
for(word of words){
    if(word in obj){
       obj[word]+=1;
    }
    else{
        obj[word]=1;
    }
}

for(element in obj){
    output+=obj[element]+element;
    

}
console.log(output);//