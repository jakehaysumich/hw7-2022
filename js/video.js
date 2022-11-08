var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.autoplay = false
	video.loop = false
	video.muted = false
	console.log(video)


});
document.querySelector("#play").addEventListener("click", function(){
	console.log("play video")
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%'
	video.play()
})
document.querySelector("#pause").addEventListener("click", function(){
	console.log("pause video")
	video.pause()})


document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate = video.playbackRate * .9 
	console.log("slowed down to "+video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate / .9
	console.log("sped up to "+video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 10 
	console.log("Jumped 10 to "+ video.currentTime)
	if(video.currentTime>=video.duration){video.currentTime = 0;
	console.log("Jumped past duration restart to "+video.currentTime)}
})

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted == true){
		video.muted = false
		console.log("volume unmuted set to "+video.volume)
		mute.textContent = "Mute"}
	else{ 
		video.muted = true
		console.log("volume muted")
		mute.textContent = 'Unmute';}
})

document.querySelector("#slider").addEventListener("click", function(){
	video.volume = this.value/100
	console.log("volume set to "+video.volume)
	document.querySelector('#volume').innerHTML = video.volume* 100+"%"})

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
	console.log("old school styled")})

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
	console.log("original styling")})
	

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
