function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle",0)
  }
  
  findNeedle(['hay', 'junk', 'hay', 'needle', 'moreJunk', 'hay' , 'randomJunk'])