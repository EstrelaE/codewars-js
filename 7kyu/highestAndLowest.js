function highAndLow(numbers){
  let nums = numbers.split(" ").map(e => parseInt(e)).sort((a,b)=> a - b)
  let result = [];
  result.push(nums[nums.length-1],nums[0])
  return result.map(e => String(e)).join(" ")
}

//other solutions
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function highAndLow(numbers){
  let arr = numbers.split(' ').map(Number);  
  return Math.max(...arr) + ' ' + Math.min(...arr);
}
