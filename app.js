let secretNum = 5;
let guessNum = prompt("Guess the number ranging from (1-10)")
if (guessNum == secretNum){
    alert("Bingo! correct answer")
}
else if (guessNum == ++secretNum    ){
     alert("Close enough to the correct answer")
}
else if (guessNum == 4  ){
     alert("Better guess but not correct try again!")
}

else{
     alert("Wrong Answer!")
}