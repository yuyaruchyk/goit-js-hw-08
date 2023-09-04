import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo('vimeo-player');


player.on('timeupdate', function (data) {
    
    const currentTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);
   


   


   
});
const savedTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(savedTime).then(function(seconds) {
   
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
           
            break;

        default:
            
            break;
    }
});