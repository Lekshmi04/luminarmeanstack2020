//create bank applications having following functionality create account(),deposit(),balanceEnq(),withdraw()


class bank{
    static get bankname(){
        var bname="SBI";
        return(bname);
    }
    static printbankname(){
        var bname="SBI";
        console.log(bname);
    }
    createaccount(p_name,accno,balance){
       this.p_name=p_name;
       this.accno=accno;
       this.balance=balance;
      // this.b_name=b_name;
    }
    deposit(amount){
        this.balance+=amount;
        console.log("your"+bank.getbname()+"account credited with"+amount+"avl balance"+this.balance);
    }
    withdraw(amount){
       if(amount>this.balance){
           console.log("insufficient balance in your account");
       }
       else{
           this.balance-=amount;
           console.log("your"+bank.getbname()+"account debited with"+amount+"avl balance"+this.balance);
       }


    }
    balanceEnq(){
        console.log("your current account balance="+this.balance);
    }
    
    }
    class Mybank extends bank{
     var obj=new bank();
     obj.createaccount("lekshmi",1001,25000);
     obj.deposit(5000);
     obj.withdraw(5600);
    }     





