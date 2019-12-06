$(document).ready(function() {
var turns = ["#","#","#","#","#","#","+","#"];
var computerTurn = "";
var turn = "";
var gameon = false;
var count = 0;

var startTurn = prompt("Choose Your Move", "Type X or O").toUpperCase();
switch (startTurn) {
   case "X":
      computerTurn = "0";
      turn = "X";
      $("message").html("Player" + turn +"gets to start!");
      break;
   case "0":
       computerTurn = "X";
       turn = "O";
       $("#message").html("player" + turn + "gets to start!");
   break;
   case null:
       alert("Sorry. Please type X or O");
       window.location.reload(true);
   break;
   default:
       alert("Sorry. Please type X or O");
       window.location.reload(true);
   break;
   default:
}
    
});
