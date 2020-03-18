export default class AudioControl {
  constructor() {
    // 创建audio标签
    this.audio = new Audio();
    // 记录当前播放状态
    this.status = 'pause';
  }
  play(){
    this.status = 'play';
    this.audio.play();
  }
  pause(){
    this.status = 'pause';
    this.audio.pause();
  }
  getAudio(src){
    this.audio.src = src;
    this.audio.load();
  }
}
