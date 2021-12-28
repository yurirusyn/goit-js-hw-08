import Player from "@vimeo/player";
import throttle from "lodash.throttle";
console.log(Player)
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
     localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
};
player.on('timeupdate', throttle(onPlay, 1000));
const data = localStorage.getItem("videoplayer-current-time")
player.setCurrentTime(data).then(function(seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            
            break;

            default:
         
            break;
    }
});