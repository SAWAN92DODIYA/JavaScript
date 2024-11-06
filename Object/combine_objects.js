const object_first = {1:'a',2:'b',3:'c'}
const object_second = {4:'d',5:'e'}

const objectFirstAndSecond ={ object_first , object_second }  
console.log(objectFirstAndSecond);

const objectFirstAndSecond_first = Object.assign({},object_first,object_second);
console.log(objectFirstAndSecond_first);

const objectFirstAndSecond_second = {...object_first,...object_second}  // most of time use 
console.log(objectFirstAndSecond_second);

