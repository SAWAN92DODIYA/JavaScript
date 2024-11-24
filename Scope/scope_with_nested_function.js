function one(){
  const userName = "sawan";
    function two(){
      const brotherName = "vishal";
      console.log(userName);
    }
    // console.log(brotherName);  // this is other  scope to never access 
    two(); 

}

one();

console.log(addOne(8));  // this is possible case 
function addOne(number)
{
  return number+1;
}


addTwo(8)  //  Cannot access 'addTwo' before initialization
const addTwo = function(number)
{ 
  return number+2;

}

