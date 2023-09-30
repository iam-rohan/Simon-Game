var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function newsequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  var selectedItem = $("#" + randomChosenColour);

  selectedItem.animate({ opacity: 0 }, 100, function () {
    selectedItem.animate({ opacity: 1 }, 100);
  });
  console.log(gamePattern);
  playsound(randomChosenColour);
}

newsequence();
//Function call

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playsound(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern); // This should log the userClickedPattern array
});

function playsound(name) {
  var audioFile = new Audio("sounds/" + name + ".mp3"); // Use randomChosenColour instead of selectedItem
  audioFile.play();
}

function animatePress(currentcolor) {
  $("#" + currentcolor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentcolor).removeClass("pressed");
  }, 100);
}
