let count = 0;

function cc(card) {
  // Only change code below this line
  let increment = [2,3,4,5,6];
  let zero = [7,8,9];

  if (increment.includes(card)) {
    count++;
  }

  else if (zero.includes(card)){
    
  }

  else {
    count--;
  }

  if (count >0){
    return count+" Bet";
  }

  else{
    return count+" Hold";
  }

  
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
