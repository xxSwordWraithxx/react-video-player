import axios from 'axios';

const KEY = 'AIzaSyDh1y_8kTbB12yvjO7IvWF33s6b7BgrSq8';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
       part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

