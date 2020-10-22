class employee{
    constructor(eid,name,desig,join,resign){
      this.eid=eid;
      this.name=name;
      this.desig=desig;
      this.join=join;
      this.resign=resign;
    }
    getEmp=()=>{
        console.log(this.eid)
        console.log(this.name)
        console.log(this.desig)
        console.log(this.join)
        console.log(this.resign)

    }
}
var obj=new employee(100,"ajay","devop",1981,2003)
obj.getEmp();
var obj1=new employee(101,"vijay","devop",1992,2008)
obj1.getEmp();
var obj2=new employee(102,"bijoy","ba",1999,2007)
obj2.getEmp();
var obj3=new employee(103,"jhon","ba",1989,2010)
obj3.getEmp();
var obj4=new employee(104,"danie","qa",2009,2014)
obj4.getEmp();
var obj5=new employee(105,"lari","qa",1987,2010)
obj5.getEmp();
var arr=[]
arr.push(obj)
arr.push(obj1)
arr.push(obj2)
arr.push(obj3)
arr.push(obj4)
arr.push(obj5)

var emp=arr.map(obj=>obj.name+" "+obj.desig)
console.log(emp);

var emp1=arr.filter(obj=>obj.desig=="devop")
console.log(emp1);

var emp2=arr.filter(obj=>obj.join>1980 & obj.join<1990)
console.log(emp2);

var emp3=arr.filter(obj=>obj.resign-obj.join >9)
console.log(emp3);

var emp4=arr.sort((obj1,obj2)=>obj1.join-obj2.join)
console.log(emp4);
