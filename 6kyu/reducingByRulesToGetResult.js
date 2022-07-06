function reduceByRules(numbers, rules){
  while(rules.length <= numbers.length){
    rules.push(...rules)
  }
  let result =  numbers.reduce((a,b,c) => rules[c-1](a,b))  
  return result
}

//other solutions
function reduceByRules(numbers, rules)
{
  return numbers.reduce((output, number, index) => {
    return rules[(index - 1) % rules.length](output, number);
  });
}
