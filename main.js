var cards = window.location.hash.substr(1);
// console.log(cards);
var firstArray = [ ];
var secondArray = [ ];
var $grid = $("#grid")
function Begin(){
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

console.log("and now the array has been sorted " + potentialNumbers)// shows array titled potentialNumbers

for(var i = 0; i < cards; i++){ //for loop displays cards on screen
  var $cardNum = $('<div>').addClass("card").text(potentialNumbers[i]);
  $grid.append($cardNum);
}
var cardText; // value undefined, purpose is to store cardText.text()
// console.log(cardText)
var whichCard; // value undefined, purpose is to store which card is clicked first and store it

$(".card").on("click",function card(){
  
  $(this).css("color","black")
  console.dir($(this).text())
  if(cardText == null && whichCard == null){ //if null then store this cards value
    cardText = $(this).text();
    whichCard = $(this);
  }
  else if(cardText == $(this).text()){ // there is already a value in the cardText Var so compare the current one to the previous
    console.dir($(this));
    console.log("ITS A MATCH!!!!!!");
    $(this).css("background-color","transparent").css("color","transparent");
    whichCard.css("background-color","transparent").css("color","transparent");
    cardText = null; // try to find a matching pair again
    whichCard = null; // resets which card was clicked

}else{
  $(this).css("color","transparent");
  whichCard.css("color","transparent");
    cardText = null; // try to find a matching pair again
    console.log("Not a Match try again");
    whichCard = null; // resets which card was clicked
    alert("Not a match")
  }


})
}
// ----------------The Start----Index.html------------------------------------------------------------------------
$("#yes").on("click",function(){
  window.location.replace("levels.html")
})
$("#no").on("click", function(){
  var a = 10000000.123456;
  while(true){
    a = a*a;
    prompt("Are you sure")
    alert("Are you sure?")
}
})
// ------------------------------------------------Levels Page-----------------------------------------------------

$("#level1").on("mouseover",function(){
  $(this).text("Level 1").css("text-shadow","yellow 1px 0 10px");
})
$("#level1").on("mouseout",function(){
    $(this).text("Something really quick").css("text-shadow","transparent 1px 0 10px");
})
$("#level2").on("mouseover",function(){
  $(this).text("Level 2").css("text-shadow","yellow 1px 0 10px");
})
$("#level2").on("mouseout",function(){
    $(this).text("I could spare a few minutes").css("text-shadow","transparent 1px 0 10px");
})
$("#level3").on("mouseover",function(){
  $(this).text("Level 3").css("text-shadow","yellow 1px 0 10px");
})
$("#level3").on("mouseout",function(){
    $(this).text("I got all day").css("text-shadow","transparent 1px 0 10px");
})
$("#level4").on("mouseover",function(){
  $(this).text("Level 4").css("text-shadow","yellow 1px 0 10px");
})
$("#level4").on("mouseout",function(){
    $(this).text("I got all year").css("text-shadow","transparent 0 0 0")
})

$("#level1").on("click",function(){
  $("#grid").css("max-width","275px");
})





// ----------------------------------------------Games Page-----------------------------------------------------

Begin();
