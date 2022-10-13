var audioElement = new Audio('audio/horse.mp3');

function play() {
    console.log('play');
    audioElement.play();
}

var x = document.getElementById("audio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 