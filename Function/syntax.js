function myInfo(){
  console.log("MY name Is Sawan Dodiya");
  console.log("my mother name is Mamata");
  console.log("my father name is Suresh Dodiya");
  console.log("my brother name is Vishal dodiya");

}

function addTwoNumber(firstNumber , secondNumber){  // parameters 
  return firstNumber + secondNumber;

}

function loginUserMessage(username)
{
  if(username === undefined)  // similer to the (!undefined)
  {
    console.log("Please enter the username ..");
    return 
  }
  return  `${username} just logged in`     
}

function calculateCartPrice(...prices)
{
  console.log( prices);
}

myInfo()
const total = addTwoNumber(123,345)  // arguments 
console.log(`Total ${total}`);
console.log(loginUserMessage());
console.log(loginUserMessage("balak"));

calculateCartPrice(200,233,3444);






