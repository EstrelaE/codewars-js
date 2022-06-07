function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
 this.isWorthIt = function() {
    let onlyDraft = draft -(crew * 1.5)
    if(onlyDraft < 20) {
      return false
    } else {return true}
  }
}

//other solution
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
 this.isWorthIt = function() {return draft - (crew * 1.5) > 20}

}
