import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo('vimeo-player');

player.on(
  'timeupdate',
  throttle(function (data) {
    const currentTime = data.seconds;

    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);
const savedTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(savedTime);

localStorage.removeItem('videoplayer-current-time');
