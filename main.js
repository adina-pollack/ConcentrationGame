var $organize = $("#organize")
for(var i = 0; i < 8; i++){
  var $cardNum = $('<div>').addClass("card").val(i+1).text(i+1);
  $organize.append($cardNum);
}

$(".card").on("click",function(){
  $(this).css("background-color","blue");
  console.log("I'm Blue");
  console.log($(this).val());
  // if(($(this).val())==1){
  //   $(this).css("background-color","yellow");
  // } Tester Code
})
