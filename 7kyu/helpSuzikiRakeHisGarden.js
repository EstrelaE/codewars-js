function rakeGarden(garden) {
  let result = garden.split(" ")
  result = result.map((e,i) => {
    if(e !== "gravel" && e !== "rock"){
     return "gravel"
    } else {
      return e
    }
  })
  return result.join(" ")
}

//other solutions
const rakeGarden = garden => 
  garden
    .split(' ')
    .map(item => item === 'rock' ? 'rock' : 'gravel')
    .join(' ')

function rakeGarden(garden) { 

  var tab = garden.split(" ");
  for(var i=0; i<tab.length;i++){
    if(tab[i]!='rock' && tab[i]!='gravel'){
      tab[i] = 'gravel';
    }
  }
  var rakedGarden = tab.join(" ");

  return rakedGarden;
 }
