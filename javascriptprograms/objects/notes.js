var student={roll:1001,name:"ajay",course:"mca"}
console.log(student);
console.log(student.name);
student["total"]=150;
console.log(student);
console.log("gender" in student);
console.log("name" in student);
student["total"]+=25;
console.log(student.total);