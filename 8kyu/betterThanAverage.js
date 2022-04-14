function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
     classPoints.push(yourPoints)
     for (let i = 0; i < classPoints.length; i++) {
       sum += classPoints[i];
     }
     if (yourPoints > sum / classPoints.length) {
       return true
     } else {
       return false
     }
   }
   