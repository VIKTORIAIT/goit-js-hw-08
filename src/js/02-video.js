import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let localItem = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(localItem).then(function (seconds) {});

player.on(
  'timeupdate',
  throttle(function func(ev) {
    localStorage.setItem('videoplayer-current-time', `${ev.seconds}`);
  }, 1000),
);
