var numberOfDrumButtons = document.querySelectorAll(".drum").length

// Detect Button Click
for(var i=0; i<numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)
  });
}

// Detect KeyDown events
document.addEventListener("keydown", function(event){
  var key = event.key
  makeSound(key)
  buttonAnimation(key)
})

// Function to handle sound generation
const makeSound = (key) => {
  switch (key) {
    case 'w':
      var audio = new Audio("./sounds/crash.mp3")
      audio.play(true);
      break;
    case 'a':
      var audio = new Audio("./sounds/kick-bass.mp3")
      audio.play(true);
      break;
    case 's':
      var audio = new Audio("./sounds/snare.mp3")
      audio.play(true);
      break;
    case 'd':
      var audio = new Audio("./sounds/tom-1.mp3")
      audio.play(true);
      break;
    case 'j':
      var audio = new Audio("./sounds/tom-2.mp3")
      audio.play(true);
      break;
    case 'k':
      var audio = new Audio("./sounds/tom-3.mp3")
      audio.play(true);
      break;
    case 'l':
      var audio = new Audio("./sounds/tom-4.mp3")
      audio.play(true);
      break;
  }
}

// Function to add button animation
const buttonAnimation = (currentKey) => {
  var button = document.querySelector("." + currentKey)
  button.classList.add("pressed")
  setTimeout(() => {
    button.classList.remove("pressed")
  }, 100);
}