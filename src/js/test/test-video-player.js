import {getApiData} from '../api/api-service.js';

function onFetchById(id) {
    const type = 'images,videos&language=ru-RU'
    const value = '&append_to_response='
    let query = `/movie/${id}?${value}${type}`;
  
    return getApiData(query).then(result => result);
  };

  let movieId = 370172;

onFetchById(movieId).then(result => console.log(result));
  
//    N1r36HTysDM
//const player = document.querySelector('#player')
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '480',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
