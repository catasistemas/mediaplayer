import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const player = new MediaPlayer( {el: video, plugins: [new AutoPlay()]} );


const button = document.querySelector("button");
button.onclick = () => player.play();

const toggleMute = document.getElementById("toggleMute")
toggleMute.onclick = () => player.toggleMute();




