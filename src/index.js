import getData from './js/getData'
import render from './js/render'
import bindEvent from './js/bindEvent'
import AudioControl from './js/audioControl'
import renderList from './js/renderList'


const audio = new AudioControl();//加载音频、播放、暂停的控制器

getData(data => {
  render(data[0]); //初始化渲染页面
  audio.getAudio(data[0].audioUrl); //加载音频
  renderList(data);//渲染歌曲列表
  bindEvent({data, audio});// 绑定事件
});
