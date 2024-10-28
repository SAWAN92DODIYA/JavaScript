const myCompany = ["bestpeers", "kolezeet"]
const myNumber = [1,2,3,4]
const allDataTypes = [1,2,3,"Number","String"]

console.log(myCompany)
console.log (myNumber);
console.log(allDataTypes);


myCompany.push("TCS")
allDataTypes.push(true);



console.log(myCompany)
console.log(allDataTypes);
console.log(allDataTypes.pop());  // get  last element of the array 

console.log(allDataTypes.shift())  // remove the first element of the array 
console.log(allDataTypes.unshift(1))   // add element in first

const doubled = myNumber.map(x => x*2)   // similer to loop 
console.log(doubled);

const evenNumber = myNumber.filter(x => x%2 == 0);
 
myNumber.forEach(number => console.log(number));

const findNumber = myNumber.find(number => number > 2);
const findIndex = myNumber.find(number => number > 2);

console.log(myNumber.includes(2))   // check your number present or not in the array 



