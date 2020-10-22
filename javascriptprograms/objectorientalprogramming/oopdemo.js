//class person {
  //  setperson(name, age) {
  //      this.name = name;
  //      this.age = age;
  //  }
   // printperson() {
   //     console.log("name=" + this.name);
  //      console.log("age=" + this.age);
  ////  }
///}
//var obj = new person();//reference
//obj.setperson("ajay", 25);
//obj.printperson();


//var obj1 = new person();
//obj1.setperson("vijay", 26);
//obj1.printperson();


class student{
    static get collegename(){
        var colname="luminar";
        return(colname);
    }
    static printcollegename(){
        var colname="luminar";
        console.log(colname);
    }
    setstudent(roll,name,course,total){
        this.roll=roll;
        this.name=name;
        this.course=course;
        this.total=total;
    }
    printstudent(){
        console.log("roll="+this.roll);
        console.log("name="+this.name);
        console.log("course="+this.course);
        console.log("total="+this.total);
    }
}
class Myclass extends student{};
    var  obj=new Myclass();
        obj.setstudent(01,"lekshmi","btech",1200);
       obj.printstudent();
console.log(Myclass.collegename);

















