function number(number)
{
  console.log(number)
}
function objectValue(object)
{
  console.log(`my name is : ${object.name} , my age is : ${object.age}`);
}
function arrayValue(array)
{
  console.log(array[1]);
}


objectValue({name: "sawan",age: 34});
arrayValue([23,34,45,565]);