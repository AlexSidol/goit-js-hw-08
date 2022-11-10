
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');

const iframePlayer = new Player(iframe);


const onPlay = evt => {
    localStorage.setItem("videoplayer-current-time", evt.seconds);

};

const savedTimeReading = () => {
    
    return Number(localStorage.getItem("videoplayer-current-time"));
}

iframePlayer.on('timeupdate', throttle(onPlay, 1000));
iframePlayer.setCurrentTime(savedTimeReading());
