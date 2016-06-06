var $organize = $("#organize")
for(var i = 0; i < 4; i++){
  var $cardNum = $('<div>').addClass("card").val(i+1).text(i+1);
  $organize.append($cardNum);
}
// console.log(i); Testing Value of i
var combos = (i / 2)-1;
function random(){
  return Math.round(Math.random()*(combos)+1)
}

// for(var k = 0; k < 1000; k++){
// console.log(random());
// } Tester code to se value of random function, next to assign these values to cards to create matching pairs


$(".card").on("click",function(){
  $(this).css("background-color","blue");
  console.log("I'm Blue");
  console.log($(this).val());
  // if(($(this).val())==1){
  //   $(this).css("background-color","yellow");
  // } Tester Code to check for values on different "card divs"
})
