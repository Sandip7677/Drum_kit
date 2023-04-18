let butn = document.querySelectorAll(".drum").length;

const playSound = (key) => {
  switch (key) {
    case "w":
      let sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;

    case "a":
      let sound1 = new Audio("sounds/kick-bass.mp3");
      sound1.play();
      break;

    case "s":
      let sound2 = new Audio("sounds/snare.mp3");
      sound2.play();
      break;

    case "d":
      let sound3 = new Audio("sounds/tom-1.mp3");
      sound3.play();
      break;
    case "j":
      let sound4 = new Audio("sounds/tom-2.mp3");
      sound4.play();
      break;

    case "k":
      let sound5 = new Audio("sounds/tom-3.mp3");
      sound5.play();
      break;
    case "l":
      let sound6 = new Audio("sounds/tom-4.mp3");
      sound6.play();
      break;
    
  }
};
for (let index = 0; index < butn; index++) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
      let key = this.innerHTML;
      // console.log(key);
      playSound(key);
    });
}

document.getElementsByTagName('body')[0].addEventListener('keypress',(e)=>{
    playSound(e.key);
});