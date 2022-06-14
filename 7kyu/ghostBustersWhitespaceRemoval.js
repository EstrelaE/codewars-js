function ghostBusters(building) {
  let noGhosts = building.split(" ").join("")
  if (building === noGhosts) {
    return "You just wanted my autograph didn't you?"
  } else {
    return noGhosts
  }
}

//other solutions
function ghostBusters(building) {
  const str = "You just wanted my autograph didn't you?"
  const noSpace = building.split(' ').join('')
  return noSpace === building ? str : noSpace
}
