// const tinderUser = new Object();
const tinderUser = {}
tinderUser.id  = "sawan56";
tinderUser.name = "SAWAN"
tinderUser.isLoggedIn = false;

console.log(tinderUser)


const regulerUser = {
  email: "sawan@google.com",
  fullName:{
    userFullName:{
      firstName: "SAWAN",
      lastName: "DODIYA"
    }
  }
}


console.log(regulerUser.fullName.userFullName.firstName);
console.log(regulerUser.fullName?.userFullName)
console.log(Object.values(regulerUser))
console.log(Object.keys(regulerUser))