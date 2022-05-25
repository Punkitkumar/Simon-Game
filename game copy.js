var buttonColors = ["red","blue","green","yellow"];
// var randomChosenColor = buttonColors[nextSequence()];
var gamePattern = [];
var userClickedPattern = [];
// gamePattern.push(randomChosenColor);
// animateButtons(randomChosenColor);
var level = 0;
var i = true ;
var clicked = 0 ;
$(document).keypress(function(event){
    if(i==true){
        nextSequence();
        $("h1").text("Level "+level);
    }
    i=false ;
});
$(".btn").click(function(key){
    // console.log(key.currentTarget.id);
    var colorid = key.currentTarget.id;
    handler(colorid);
    if(checkanswer(clicked)){
        
    }
    if(userClickedPattern[clicked]!=gamePattern[clicked]){
        $("body").addClass("red");
        setTimeout(function(){
            $("body").removeClass("red");
        },300);
        playSound("wrong");
        $("h1").text("Pree A Key to start");
        i=true ;
        clicked = 0;
        level = 0 ;
        gamePattern=[];
        userClickedPattern = [];
    }
    else{
        playSound(colorid);
        animateButtons(colorid);
    }
    clicked++;
    if(clicked == level ){
        nextSequence();
        clicked = 0 ;
        userClickedPattern = [];
    }

});
function checkanswer(clicked){
    if(userClickedPattern[clicked]==gamePattern[clicked])return true;
    else return false ;
}
function handler(id){
    var userChosendColor = id ;
    userClickedPattern.push(userChosendColor);
    console.log("userClickedPatter : "+ userClickedPattern);
}
function nextSequence(){
    level++;
    var randomNumber = Math.floor(Math.random()*4);
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
    $("h1").text("Level "+level);

    console.log("gamePatter : "+ gamePattern);
    // return randomNumber;
}

function animateButtons(name){
    $("#"+name).fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
}
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },300);
}

function playSound(name){
    var soundaddress = "sounds/"+name+".mp3";
    var sound = new Audio(soundaddress);
    sound.play();
}



 




































// var buttoncolors = ["red" , "blue" , "green" ,"yellow"];
// var randChosenColor = buttoncolors[newSequence()];
// // console.log(randChosenColor);
// var gamePattern = [];
// gamePattern.push(randChosenColor);

// var userClickedPattern = [];
// // $(chosenid).animateHighlight("#dd0000", 1000);
// // action(randChosenColor);
// function newSequence(){
//     var randNum = Math.floor(Math.random()*4);
//     // console.log(randNum);
//     return randNum;
// }   
// function action(randChosenColor){
//     var chosenid= "#"+randChosenColor ;
//     $(chosenid).fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
//     // var soundaddress = "sounds/"+randChosenColor+".mp3";
//     // var sound = new Audio(soundaddress);
//     // sound.play();
// }
// function clicked(color){
//     var userChosendColor = color ;
//     userClickedPattern.push(userChosendColor);
//     console.log(userClickedPattern);
//     var soundaddress = "sounds/"+color+".mp3";
//     var sound = new Audio(soundaddress);
//     sound.play();
// }