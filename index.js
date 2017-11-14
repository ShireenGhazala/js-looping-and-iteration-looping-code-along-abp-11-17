

function printBadges(arrayNames){
  for (i = 0; i < arrayNames.length; i++ ){
   console.log(`Welcome ${arrayNames[i]}! You are employee #${i+1}.`)
  }
  return arrayNames;
}


function coinToss(){
  return Math.random() >= 0.5;
}

function tailsNeverFails(){
  let count=0;
  while (coinToss()){
    count=count++;
  }
  console.log( `You got ${count} tails in a row!` );
}
