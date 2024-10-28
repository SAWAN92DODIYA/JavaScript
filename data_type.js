// datatype in most of the two types   
// 1. Primitive (stack)
  // 7 types of primitive 
      // [String , Number, Boolearn , null, undefined, Symbol, BigInt]

  let score = 789;
  const scoreValue = 123.23;

  const isLoggedIn = false;
  const outsideTemp = null;
  let userEmail = undefined; // let userEmail; 

  const id = Symbol("12");
  const anotherId = Symbol("12");
  console.log(id === anotherId);   // both are the diffrent  

  const largeNumber = 7610393404887878118085745878n
  console.log(typeof largeNumber)
  
  

// 2. Reference (Non Primitive) (heap)
    // array , Object , Functions 

  const myInfo = ["Name","age","add"];
  let myInfoObect = {
                      name:"sawan",
                      age:16,
                    }
  const printMyname = function(){
    console.log("My name is : Sawan Dodiya");
  }

  
  console.log(typeof printMyname);