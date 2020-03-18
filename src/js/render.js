import $ from 'zepto'
import blurImg from './gaussBlur'

/**
 * 
 * @param {Array} data 歌曲信息对象
 */
export default function render(data) {

  // 创建出一个image标签，用于背景图高斯模糊
  const img = new Image();
  img.src = data.imgUrl;
  img.onload = function () {
    // image标签创建好后，修改占位图片的src
    $('.img-wrapper img').attr('src', data.imgUrl);
    // 设置背景图片
    blurImg(img, $('body'));
  }

  // 歌曲信息
  const info = `
          <div class="albumn-info">
            <div class="song-name">${data.song}</div>
            <div class="song-author">${data.singer}</div>
            <div class="song-albumn">${data.album}</div>
          </div>`;
  
  // 增加dom节点
  $('.albumn-info').replaceWith(info);

  if (data.isLike) {
    $('.control .like').addClass('liked')
  }

}