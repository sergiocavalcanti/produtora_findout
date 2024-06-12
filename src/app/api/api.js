// constants
const key = 'AIzaSyA-ZH0Lxh5jMgjGaMLfMGHF_UnGJZrz1qw';
const playlistId = 'PL4wj0Qx2BInTJRnOsUNuUqEx5RWZSClRc'
const URLplaylist = 'https://www.googleapis.com/youtube/v3/playlist';
var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

//youtube API sees all these info, so that it knows what kind of information you want to retrieve
const options = {
  playlistId: playlistId,
  maxResults: 20,
  key: key,
  part: 'snippet'
};

//get JSON from server using fetch

let loadMainVideo = function () {

    //this works for now but have to come back later to understand it
    URL += '?' + Object.keys(options).map((k) => k + '=' + encodeURIComponent(options[k])).join('&');
    //use fetch to get HTTP request
    var newData = []
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        var myData = data.items;
        // console.log(myData)
        myData.map(
          (video) => {
            var id = video.snippet.resourceId.videoId;
            var idDesc = video.snippet.description;
            newData.push([id, idDesc])
          }
        )
      })
      .catch(err => console.log(err))
      // console.log(newData)
      return newData
  };

const loadMV = loadMainVideo();

export default loadMV;