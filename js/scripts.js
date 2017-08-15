var puzzle = "";

$(document).ready(function(){

  $("#phrase").submit(function(event){
    event.preventDefault();
    var phrase = $("#sentence").val().split("");
    console.log(phrase)
    for (var index = 0; index <= phrase.length-1; index++){
      console.log(phrase[index]);
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
    console.log(puzzle)
  });
});
