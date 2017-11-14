

function printBadges(arrayNames){
  for (i = 0; i < arrayNames.length; i++ ){
   console.log(`Welcome ${arrayNames[i]}! You are employee #${i+1}.`)
  }
  return arrayNames;
}
function tailsNeverFails(){
  return Math.round(Math.random());
  tails=0;
  while (tailsNeverFails()) {
  tails=tails++;
  }
  return `You got ${tails} tails in a row!`;
}
