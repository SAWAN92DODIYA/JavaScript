const user = {
  bankName: "icic",
  amount:5000,

  welcomeMessage: function(){

    console.log(`${this.bankName} my bank `);
    console.log(this)
    
  }
}
user.welcomeMessage()
console.log(this)

function chai(){
    console.log(this)  
}


chai();

  () => {}