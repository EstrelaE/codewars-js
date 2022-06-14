function sayHello( name, city, state ) {
  let fullName = name.join(" ")
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
}

//other solutions
function sayHello( name, city, state ) {
return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}
