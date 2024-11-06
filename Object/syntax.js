// singleton
Object.create 
const singleton = new Object()  // singleton object 


// object literals 
const literals = {};  // literals object 
const sym = Symbol("key1");
const JsUser = {
  name: "Sawan",
  age: 16,
  location: "Indore",
  "permanet addresh ": "Dhar",
  email: "sawan@gmial.com",
  [sym]: 76104594394


}

JsUser.greeting = function()
{
  console.log("Hello JS user")
}

JsUser.greeting_two = function()
{
  console.log(`Hello JS user : ${this.name}`)
}

console.log(JsUser.email);  
console.log(JsUser["email"]);
console.log(`${JsUser.age}`)
console.log(JsUser[sym])
console.log(JsUser)
console.log(JsUser.greeting())
console.log(JsUser.greeting_two())

