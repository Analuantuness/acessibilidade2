document.getElementById("increase-font-size").addEventListener("click", function() {
    changeFontSize(1);
});

document.getElementById("decrease-font-size").addEventListener("click", function() {
    changeFontSize(-1);
});

function changeFontSize(step) {
    var currentFontSize = parseFloat (getComputedStyle(document.body).fontSize);
    var newFontSize = currentFontSize + step;
    document.body.style.fontSize = newFontSize + "px";
}

const animatedGif = document.getElementById("animated-gif");
const pauseButton = document.getElementById("pause-button");
let isPaused = false;
let gifSrc = animatedGif.src;

pauseButton.addEventListener("click", () => {
    if (isPaused) {
        animatedGif.src = gifSrc;
        pauseButton.textContent = "Pause";
    } else {
        gifSrc = animatedGif.src;
        animatedGif.src = "";
        pauseButton.textContent = "Play";
    }
    isPaused = !isPaused;
});

const forwardButton = document.getElementById('forwardButton');
const songSelector = document.getElementById('songSelector');
function pauseAudio() {
    var audio = document.getElementById("myAudio");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  function downloadAudio() {
    var audio = document.getElementById("myAudio");
    var downloadLink = document.createElement("a");
    downloadLink.href = audio.src;
    downloadLink.download = audio.src.split("/").pop();
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  function setVolume(value) {
    var audio = document.getElementById("myAudio");
    audio.volume = value;
  }