function dontGiveMeFive(start, end)
{ let result = []
 for (let  i = start; i <= end; i++) {
   if(i.toString().indexOf("5") === -1) {
     result.push(i)
   }
   
 }

   return result.length
}

//other solutions
function dontGiveMeFive(start, end) {
    let count = 0;

    for (let i = start; i <= end; ++i)
        if (!i.toString().includes("5"))
            count++;

    return count;
}
