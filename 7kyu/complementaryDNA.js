function DNAStrand(dna){
    let complementarySide = ""
    for(let i = 0; i < dna.length; i++) {
      if (dna[i]==="A") {
       complementarySide += "T"
       } else if (dna[i]==="T") {
         complementarySide += "A"
       } else if (dna[i]==="C") {
         complementarySide += "G"
       } else if (dna[i]==="G") { complementarySide += "C"}
     else {return dna[i]} 
    }
    return complementarySide
  }