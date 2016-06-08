var cards = 16;
var $grid = $("#grid")
var potentialNumbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

potentialNumbers.sort(function(a, b){
  var randomNumber = Math.random();
  if(randomNumber < 0.5){
    return 1;
  }else{
    return -1;
  }
});

console.log(potentialNumbers)
for(var i = 0; i < cards; i++){
  var $cardNum = $('<div>').addClass("card").text(potentialNumbers[i]);
  $grid.append($cardNum);
}
var combos = (i / 2)-1;
function random(){
  var number = Math.round(Math.random()*(combos)+1);
   return number;
}
var topHalf = [];
var bottomHalf = [];
function startUp(){
  for(var s = 0; s <=combos; s++){
 if(topHalf.includes(random()) == false ){
   topHalf[s] = random();
 }

  console.log(topHalf);
//  console.log(bottomHalf);

}
}
var cardText;
console.log(cardText)
$(".card").on("click",function card(){
  console.dir($(this).text())
  if(cardText == null){
    cardText = $(this).text()
  }else if(cardText == $(this).text()){
    console.log("ITS A MATCH!!!!!!");
    // console.log("cardText already has a value "+ cardText)
  }
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
