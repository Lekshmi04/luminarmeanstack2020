var arr=[10,2,4,11]
for(var i=0;i<arr.length-1;i++){
    for(var j=i+1;j<arr.length-1;j++){
        if(arr[i]>arr[j]){
            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);