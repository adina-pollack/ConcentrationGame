var cards = 12;
var firstArray = [ ];
var secondArray = [ ];
var $grid = $("#grid")
for (var i = 0; i < (cards/2); i++){
  firstArray[i] = i+1;
  secondArray[i] = i+1;
}
console.log(firstArray);
console.log(secondArray);

var potentialNumbers = firstArray.concat(secondArray);//[1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
console.log("First the array equals: "+potentialNumbers )
potentialNumbers.sort(function(a, b){
  var randomNumber = Math.random();
  if(randomNumber < 0.5){
    return 1;
  }else{
    return -1;
  }
});

console.log("and now the array has been sorted " +potentialNumbers)// shows array titled potentialNumbers

for(var i = 0; i < cards; i++){ //for loop displays cards on screen
  var $cardNum = $('<div>').addClass("card").text(potentialNumbers[i]);
  $grid.append($cardNum);
}
var cardText; // value undefined, purpose is to store cardText.text()
// console.log(cardText)
var whichCard; // value undefined, purpose is to store which card is clicked first and store it

$(".card").on("click",function card(){
  
  console.dir($(this).text())
  //console.dir($(this));
  if(cardText == null && whichCard == null){ //if null then store this cards value
    cardText = $(this).text()
    whichCard = $(this)
  }
  else if(cardText == $(this).text()){ // there is already a value in the cardText Var so compare the current one to the previous
    console.dir($(this));
    console.log("ITS A MATCH!!!!!!");
    $(this).css("background-color","transparent").css("color","transparent");
    whichCard.css("background-color","transparent").css("color","transparent");
    cardText = null; // try to find a matching pair again
    whichCard = null; // resets which card was clicked


  }else{
    cardText = null; // try to find a matching pair again
    console.log("Not a Match try again");
    whichCard = null; // resets which card was clicked
  }




var combos = (i / 2)-1; // gets possible combinations
// function random(){
//   var number = Math.round(Math.random()*(combos)+1);
//    return number;
// }
//  console.log(bottomHalf);



// if (cardText) {
  //
  // }var cardText = $(this).text();
  // if ($(".card").text == cardText){

  // console.log("I'm Blue");
 // console.log($(this).text());

  // if(($(this).val())==1){
  //   $(this).css("background-color","yellow");
  // } Tester Code to check for values on different ".card divs"
})



// console.log("The value of combos: " + combos); testing value of combos variable
// console.log(i); Testing Value of i




//for(/** do this for the amount of blocks you have*/){
  //assigns each card a random value that does not repeat


//}
// for(var k = 0; k < 1000; k++){
// console.log("The value of random is: "+ random());
// } Tester code to se value of random function, next to assign these values to cards to create matching pairs


//OH YEAH!!!!!!!!!!!
