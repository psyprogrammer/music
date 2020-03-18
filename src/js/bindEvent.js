import $ from 'zepto'
import render from './render'
import IndexControl from './indexControl'


export default function bindEvent({data, audio}) {
  
  const indexControl = new IndexControl(data.length);//控制index的加减
  const control = $('.control');

  let index = 0;//记录当前数据索引

  control.on('index:change', function () {
    // 自定义事件：索引改变就触发事件
    // 为了解耦
    // 事件内容是：页面渲染、音频加载、音频播放（play状态下）
    console.log(index)
    console.log(data[index].audioUrl)
    render(data[index]);
    audio.getAudio(data[index].audioUrl);
    if (audio.status === 'play') {
      audio.play();
    }
  })

  control.find('.like').on('click', function () {
    $(this).toggleClass('liked');
  });

  control.find('.play').on('click', function () {
    // 根据状态决定是否播放
    audio.status === 'pause' ? audio.play() : audio.pause();
    $('.play').toggleClass('pause');
    $('.albumn-wrapper').toggleClass('albumn-wrapper-rotate');
  });

  control.find('.back').on('click', function () {

    // 索引减1
    index = indexControl.prev();
    control.trigger('index:change');

  });

  control.find('.forward').on('click', function () {

    // 索引加1
    index = indexControl.next();
    control.trigger('index:change');


  });

  control.find('.list').on('click', function () {

    $('.list-wrapper').css({
      display: 'block'
    });

    $('.list-shadow').on('click', function () {
      $('.list-wrapper').css({
        display: 'none'
      });
    })

  });


}