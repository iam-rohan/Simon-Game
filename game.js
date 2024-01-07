var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var level = 0;
var started = false;

$(document).keypress(function (started) {
  newsequence(); //Function call
  started = true;
});

function newsequence() {
  userClickedPattern.length = 0;
  level += 1;
  $("#level-title").text("Level " + level);
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

//Checking the userclick pattern with the gamePattern
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    console.log("sucess");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        newsequence();
      }, 1000);
    }
  } else {
    playsound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    console.log("wrong");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern.length = 0;
  started = false;
}

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playsound(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern); // This should log the userClickedPattern array

  checkAnswer(userClickedPattern.length - 1); //Initiating the checking of the sequence
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
