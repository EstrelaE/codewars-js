function greetDevelopers(list) {
 let arr = list
  .map(obj => ({...obj, greeting: `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`}))

 return arr
 }

//other solutions
function greetDevelopers(list) {
  list.forEach(developer => developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`)
  return list
  
}
