
function player(p) {
    let options = ['rock', 'paper', 'scissors'];
    let compChoice = options.at((Math.floor(Math.random() * options.length)));
let results = "Player chose:" + p + "\n  Computer chose: " + compChoice;
    document.getElementById("winner").innerHTML = score(p, compChoice);
   document.getElementById("result").innerHTML = results;


}
function score(o, c){
    if(o === c){
        return "Its a Tie!";
    }
    if((o === 'rock' && c === 'scissors') || (o === 'paper' && c === 'rock') || (o === 'scissors' && c === 'paper')){
    return "Player Wins!";
    }
    else{
        return "Computer Wins :(";
    }

}
