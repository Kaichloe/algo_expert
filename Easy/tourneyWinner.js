// team compete in round robin, only two team compete at a time, no ties. home team and away team. 3pts winner, 0 for loser, highest points === winner. 1 == home won, 0 === away won, only one tourney winner
// optimal is ON and OK 

function tournamentWinner(competitions, results){
  let scoreHash = {};

  for (let i = 0; i < competitions.length; i++) {
    let round = competitions[i];
    let firstTeam = round[0];
    let secondTeam = round[1];

    if (!scoreHash[firstTeam]){
      scoreHash[firstTeam] = 0;
    }
    if (!scoreHash[secondTeam]){
      scoreHash[secondTeam] = 0;
    }
    if (results[i] === 1){
      scoreHash[firstTeam] += 3;
    } else {
      scoreHash[secondTeam] += 3;
    }
  }

  let teams = Object.keys(scoreHash);
  let scores = Object.values(scoreHash);
  let maxScore = 0;
  let maxIndex;

  for (let j = 0; j < scores.length; j++) {
    if (scores[j] > maxScore){
      maxScore = scores[j];
      maxIndex = j;
    }
  }
  return teams[maxIndex];
}

// ON time and OK space, could be done better 
