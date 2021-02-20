function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
  this.plugins.forEach(element => {
    element.run(this)
  });
}


MediaPlayer.prototype.play = function() {
  this.media.play();
}

// MediaPlayer.prototype.pause = function () {
//   this.media.pause();
// }


MediaPlayer.prototype.play = function() {
if(this.media.paused){
  this.media.play();
} else {
  this.media.pause()
}
}

MediaPlayer.prototype.mute = function() {
  this.media.muted = true;
}

MediaPlayer.prototype.toggleMute = function() {
  if(this.media.muted){
    this.media.muted = false
  }else {
    this.media.muted = true;
  }
  }

export default MediaPlayer;