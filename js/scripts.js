var puzzle = "";
var phrase;
$(document).ready(function(){

  $("#phrase").submit(function(event){
    event.preventDefault();
    phrase = $("#sentence").val().split("");

    for (var index = 0; index <= phrase.length-1; index++){
      if (phrase[index] === "a" || phrase[index] === "A"){
        puzzle += "-";
      } else if (phrase[index] === "e" || phrase[index] === "E"){
        puzzle += "-";
      }else if (phrase[index] === "i" || phrase[index] === "I"){
        puzzle += "-";
      }else if (phrase[index] === "o" || phrase[index] === "O"){
        puzzle += "-";
      }else if (phrase[index] === "u" || phrase[index] === "U"){
        puzzle += "-";
      } else {
        puzzle += phrase[index];
      }
    }

    $("#phrase, .answer").hide();
    $("#result").show();
    $("span").text('"' + puzzle + '"');
  });

    $("#answer").click(function(){
      $(".ten").hide().delay(1000).fadeToggle();
      $(".nine").hide().delay(1000).fadeToggle(800);
      $(".eight").hide().delay(1000).fadeToggle(1100);
      $(".seven").hide().delay(1000).fadeToggle(1900);
      $(".six").hide().delay(1000).fadeToggle(2500);
      $(".five").hide().delay(1000).fadeToggle(3600);
      $(".four").hide().delay(1000).fadeToggle(4600);
      $(".three").hide().delay(1000).fadeToggle(5600);
      $(".two").hide().delay(1000).fadeToggle(6700);
      $(".one").hide().delay(1000).fadeToggle(6800);
      $(".answer").hide().delay(5000).fadeToggle();
      $(".answer").text('"' + (phrase.join("")) + '"');
    });
});
