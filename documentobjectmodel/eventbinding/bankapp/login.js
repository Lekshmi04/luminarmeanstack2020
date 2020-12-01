class Bank{
  static getAccountDetails(){
       let data={
           test1:{username:"test1",password:"test1",accno:1001,balance:5000},
           test2:{username:"test2",password:"test2",accno:1002,balance:8000},
           test3:{username:"test3",password:"test3",accno:1003,balance:7000},
           test4:{username:"test4",password:"test4",accno:1004,balance:4000},

       }
       return data;
   }
   static login(){
       let uname=document.querySelector("#uname").value;
        let pwd=document.querySelector("#pwd").value;
       let data=Bank.getAccountDetails()
       if(uname in data){
           let password=data[uname]["password"];
           if(pwd==password){
            swal("Login success!", "You achieved valid data!", "success");
           setTimeout(()=> window.location.href="userhome.html",5000)
           }
           else{
              swal("Login failed!", "You achieved invalid data!", "error");
           }
       }
       else{
           alert("invalid user");
       }
}
static deposit(){
    
    let uname=document.querySelector("#uname").value;
        let amt=document.querySelector("#amt").value;
       let data=Bank.getAccountDetails()
       let deposit_id=document.querySelector("#deposit_id");

       if(uname in data){
        let curbal=data[uname]["balance"];
       let bal=parseInt(curbal)+parseInt(amt);
    data[uname]["balance"]=bal;

           let deposit_id="your available balance"+bal;
           alert("avaliable balance="+bal);
       }
       else{
           swal("invalid user")
       }
       
}
static withdrawal(){
    let uname=document.querySelector("#uname1").value;
        let amt=document.querySelector("#amt1").value;
       let data=Bank.getAccountDetails()
       let deposit_id=document.querySelector("#deposit_id");

       if(uname in data){
           let avlbal=data[uname]["balance"]
           if(amt>avlbal){
               swal("insufficient balance");
           }
           else{
        data[uname]["balance"]-=amt;
        let bal=data[uname]["balance"];
        let deposit_id="your available balance"+bal;
        alert("avaliable balance="+data[uname]["balance"]);
    }
}
    else{
        swal("invalid user")
    }
    

}
}