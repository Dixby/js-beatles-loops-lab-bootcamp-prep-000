function theBeatlesPlay(musicians, instruments) {
  var facts = [];
  for (var i=0; i<(musicians.length); i++) {
    facts.push(musicians[i] + " plays " + instruments[i]);
  }
  return facts;
}

function johnLennonFacts(facts) {
  var newFacts = [];
    var i = 0;
    while (i < facts.lenght) {
      newFacts.push(facts[i] + "!!!");
    }
  return newFacts;    
}