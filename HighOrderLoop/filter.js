const coding_lnguage = ["js","ruby","java","javascript","python"]

coding_lnguage.forEach((item)=>   // each loop not return anything 
{
  console.log(item)
  
})

const list_number = [1,2,3,45,45,657,78966,9989]
const gather_then_100 = list_number.filter(
   (item) => {
     return item > 100
   }
)

console.log(gather_then_100)



const user_info = [
  {name: "sawan",age: 12},
  {name: "vishal",age: 11},
  {name: "rahul",age: 19},
  {name: "umesh",age: 25},
]


const age_18_above = user_info.filter(
  (item) => 
  {
    return item.age >= 18 
  }
)

console.log(age_18_above);