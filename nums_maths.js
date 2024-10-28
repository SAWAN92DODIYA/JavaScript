const totalNumber = 500;
const myNumber = 487;

const balance = new Number(420);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // after dot (.) number of the zero 

const otherNumber = 123.8790
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));  // indian readeble 

const minValue = Number.MAX_VALUE;
console.log(minValue);

const maxValue = Number.MIN_VALUE;
console.log(maxValue);

function warn(x) {
  if (Number.isSafeInteger(x)) {
    return 'Precision safe.';
  }
  return 'Precision may be lost!';
}

console.log(warn(minValue));



// .............. Math ..........
  
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,5,6,89,3));
console.log(Math.min(4,5,6,89,-1));

console.log((Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);

