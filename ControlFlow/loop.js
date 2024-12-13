// Foor loog 
for(let i= 0;i<5;i++)
{
  console.log(`Loop runing:- ${i}`);
}

// while loop
let w_i = 0;
while(w_i<5)
{

  console.log(`Loop runing:- ${w_i}`);
  w_i++;

}

// do .. while loop 

let d_i = 0;
do{
  console.log(`Loop runing:- ${d_i}`);
  d_i++;

}while(d_i<5);


// for...in: Iterates over the properties of an object.
let obj = {a:1,b:2,c:4}
for(let key in obj)
{
  console.log(`${key}: ${obj[key]}`);
}


// for...of: Iterates over iterable objects like arrays.
let arr = ["ram","krishana","Kard"];
for(let value of arr)
{
  console.log(value);
}
