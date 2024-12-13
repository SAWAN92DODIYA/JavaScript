const age = 18;
if (age< 18)
{
  console.log("Minor");
}else if (age == 18)
{
  console.log("just turned adult.");
}else {
  console.log("Adult");
}

// Ternary Operator: Shorter syntax for simple conditionals.

const isLoggeIn = true
const message = isLoggeIn ? "Welcome Back!" : "please log in.";
console.log(message);


// switch: Evaluates an expression and matches it against multiple cases. 

let day = "Monday"

switch(day)
{
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default :
    console.log("Midweek");
}
