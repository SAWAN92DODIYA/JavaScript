const myCompany = ["bestpeers", "kolezeet"]
const myHero = [1,2,3,4]
const allDataTypes = [1,2,3,"Number","String"]

console.log(myCompany)
console.log(myHero);
console.log(allDataTypes);

myCompany.push(myHero);  //  not a value add in arrya hole array as a value this fault of the js .. 
console.log(myCompany);  

const newArray =  myHero.concat(allDataTypes);
console.log(newArray);

const newSpread = [...myHero, ...allDataTypes,...myCompany];
console.log(newSpread);