function evenNumbers(array, number) {
  let newArr = array.filter(n => n % 2 === 0)
  newArr = newArr.splice(newArr.length - number, newArr.length)
  return newArr
}

//other solutions
const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);

const isEven = n => n % 2 === 0;
const evenNumbers = (a, n) => a.filter(isEven).slice(-n);

function evenNumbers(array, number) {
 var EvenNumbers= [];
 
 for(var i=0; i<=array.length; i++)
  {
      if(array[i] % 2 ==0)
        EvenNumbers.push(array[i]);
  }
 
   return EvenNumbers.splice(EvenNumbers.length-number,number);
   
}
