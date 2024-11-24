// Immediately Invoked Function Expressions IIFE :- execute the function .. immedetaliy ,,,  "Global scope polution to pretected "

(function dataBaseConnection()
{
  // nameiife 
  console.log("DataBase Connected");
})();

// ()  this is excuteion block 
// ; first iife  not be use ';' in last to create error 

((projectName)=>{

  // simple iife
  console.log(`DataBase Connected 02.${projectName}`);
})('instragram')