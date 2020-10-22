class employee{  
          
    constructor(eid,ename,desig,sal){
        this.eid=eid;
        this.ename=ename;
        this.desig=desig;
        this.sal=sal;
    }
    getEmp=()=>{
        console.log(this.ename);
        console.log(this.desig);
        console.log(this.sal);

    }



}
var obj=new employee(1001,"ajay","developer",25000);
obj.getEmp()
var obj1=new employee(1002,"anu","tester",20000);
obj1.getEmp()
var obj2=new employee(1003,"anju","manager",76000);
obj2.getEmp()
var arr=[]
arr.push(obj);
arr.push(obj1);
arr.push(obj2);
for(e of arr){
    if(e.sal>22000){
        console.log(e.ename+e.sal)
    }
}
for(e of arr){
    if(e.desig=="developer"){
        console.log(e.ename+e.sal+e.desig)
    }
}