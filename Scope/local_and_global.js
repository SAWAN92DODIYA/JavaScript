var a = 10;
let b = 20;
const c = 30;
if(true){
  var a = 34;  // is not follow scope 
  let b = 22;
  const c = 33;
  console.log(`${a} ${b} ${c}`);

}


console.log(`${a} ${b} ${c}`);
console.log(a)