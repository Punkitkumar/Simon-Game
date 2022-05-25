var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var i = true;
var clicked = 0;
$(document).keypress(startGame);

function startGame(event) {
  if (i == true) {
    nextSequence();
    $("h1").text("Level " + level);
  }
  i = false;
}
$(".btn").click(function (key) {
  // console.log(key.currentTarget.id);
  var colorid = key.currentTarget.id;
  handler(colorid);
  if (userClickedPattern[clicked] != gamePattern[clicked]) {

    $("body").addClass("red");
    playSound("wrong");
    $("h1").text("Game Over, Enter A Key to Start");
    clicked = 0 ;
    i = true ;
    level = 0 ;
    gamePattern = [];
    userClickedPattern = [];    
    $(document).keypress(startGame);
    setInterval(function(){
        $("body").removeClass("red");
    },1000);
    return;
  }
  playSound(colorid);
  animateButtons(colorid);
  clicked++;
  if (clicked == level) {
    setTimeout(nextSequence, 1000);
    clicked = 0;
    userClickedPattern = [];
  }
});
$(document).keypress(startGame);
function handler(id) {
  var userChosendColor = id;
  userClickedPattern.push(userChosendColor);
//   console.log("userClickedPatter : " + userClickedPattern);
}

function nextSequence() {
  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  playSound(randomChosenColor);
  animatePress(randomChosenColor);
  $("h1").text("Level " + level);

//   console.log("gamePatter : " + gamePattern);
}

function animateButtons(name) {
  $("#" + name).fadeTo(100, 0.3, function () {
    $(this).fadeTo(500, 1.0);
  });
}
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 300);
}

function playSound(name) {
  var soundaddress = "sounds/" + name + ".mp3";
  var sound = new Audio(soundaddress);
  sound.play();
}
