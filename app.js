let guessNum =5

let userNum = +prompt("Guess the num")
if(guessNum == userNum){
    console.log("Bingo! Correct answer");   
}
 else if (guessNum == userNum -1 || guessNum == userNum +1 ){
  console.log("One step close to the answer!!")
}
 else if (guessNum == userNum -2 || guessNum == userNum +2 ){
  console.log("Thura sa dur ha!!")
}
 else if (guessNum == userNum -3 || guessNum == userNum +3 ){
  console.log("Required more practice!!")
}
 else if (guessNum == userNum -4|| guessNum == userNum +4 ){
  console.log("bht kamzor ho tum mazed practice ki zrort ha!!")
}
else{
    console.log("tumse na ho payega ghr ja bhai !!!!!!");
    
}
alert("Check the console to check weather your answer is right or wrong")

