
$(".card").on("click",function updateTime(){
  var time = 0;
  var count = setInterval(function(){
    time= time + 1;
    console.log(time);
    $("#timer").text(time + " s");
  },1000)
