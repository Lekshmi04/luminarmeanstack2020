class parent{
    m1(){
        console.log("inside parent")
    }
}
class child extends parent{
    m2(){
        console.log("inside child")
    }
}
class subchild extends child{
    m3(){
        console.log("inside subchild")
    }
}
var obj=new subchild();
obj.m3();
obj.m2();
obj.m1();