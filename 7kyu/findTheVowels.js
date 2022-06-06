function vowelIndices(word){
  const result = []
  const wordLower = word.toLowerCase()
  const vowels = ["a","e","i","o","u", "y"]
  for(let i = 0; i < wordLower.length; i++){
    if(vowels.includes(wordLower[i])){
    result.push(i+1)
    }
  
  }
  return result
}

//other solutions
function vowelIndices(word){
  const str = 'aeiouy';
  const arr = word.toLowerCase().split('');
  let answer = [];
  arr.forEach((name, i) => {
    if (str.indexOf(name) !== -1) {
      answer.push(i + 1);
    }
  });
  return answer;
}
