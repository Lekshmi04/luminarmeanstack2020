class student{
    constructor(rollno,name,total,course){
        this.rollno=rollno;
        this.name=name;
        this.total=total;
        this.course=course;
    }
    getStu=()=>{
      console.log(this.rollno);
      console.log(this.name) ;
      console.log(this.total);
      console.log(this.course);
    }
}
var obj=new student(1001,"abi",120,"bca");
obj.getStu();
var obj1=new student(1002,"anu",150,"btech");
obj1.getStu();
var obj2=new student(1003,"meenu",140,"bca");
obj2.getStu();
var obj3=new student(1004,"hari",170,"bca");
obj3.getStu();
var arr=[]

arr.push(obj);
arr.push(obj1);
arr.push(obj2);
arr.push(obj3);
var stud=arr.filter(obj=>obj.total>135)
console.log(stud)
var stud1=arr.filter(obj=>obj.course=="bca")
console.log(stud1)

var total=stud1.map(obj=>obj.total).reduce((obj1,obj2)=>obj1+obj2)
console.log(total)
var maxtotal=arr.map(obj=>obj.total).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2)
console.log(maxtotal)
var topstud=arr.filter(obj=>obj.total==arr.map(obj=>obj.total).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2))
console.log(topstud)
var sort=arr.map(obj=>obj.total).sort((obj1,obj2)=>obj2-obj1)
console.log(sort)