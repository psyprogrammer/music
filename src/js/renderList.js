import $ from 'zepto'

export default function renderList(data) {
  // 渲染歌曲列表
  var str = '';
  data.forEach(function (item) {

    str += `
      <li class="item">
        <span class="song">${item.song}</span>
        <span class="singer"> - ${item.singer}</span>
      </li>
      `;
  })
  $('.list-wrapper').find('.list-panel').html(str)
}