const array_of_object = [
  {
    id: 1,
    email:"first@gmail.com"
  },
  {
    id: 2,
    email:"second@gmail.com"
  },
  {
    id: 3,
    email:"third@gmail.com"
  },
  {
    id: 4,
    email:"fourth@gmail.com"
  },
  {
    id: 5,
    email:"fifth@gmail.com"
  }

]


console.log(array_of_object[1].id);
console.log(Object.keys(array_of_object[1]));
console.log(Object.values(array_of_object[1]));
console.log(Object.entries(array_of_object[1]));

console.log(array_of_object[1].hasOwnProperty('id'));  // this key present or not 


