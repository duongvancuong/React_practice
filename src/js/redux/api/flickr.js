var axios = require('axios');

const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5`;

export const fetchImages = () => {
   return axios.get(API_ENDPOINT)
    .then(function(response) {
      console.log(response)
      return response.data.photos.photo.map(
        ({farm, server, id, secret}) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      );
    })
    .catch(function(error) {
      console.log(error)
    });
};
