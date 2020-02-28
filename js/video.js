var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() {
	video.playbackRate *= 0.8;
	console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if (video.CurrentTime + 60 > video.duration) {
	video.CurrentTime = 0;
	video.pause();
	video.playbackRate = 1;
	}
	else {
		video.CurrentTime += 60;
	}  
}

function mute() { 
  	var video = document.querySelector("#mute");
  	if (video.muted) {
		video.muted = false;
		video.innerHTML = "Mute";
		console.log("Unmuted");
  	}
  	else {
  		video.muted = true;
      	video.innerHTML = "Unmute";
      	console.log("Muted");
    }
}
function changeVolume() {
	var volume = document.querySelector("#volume")
	document.querySelector("#volume").innerHTML = (volumeSlider.value)
	console.log("Volume is " + volume*100);
}

function gray() { 
	console.log("In grayscale")
	video.classList.toggle("grayscale")
}

function color() {
	console.log("In color") 
	video.classList.toggle("grayscale")
}
