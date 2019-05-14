import axios from 'axios';

const KEY = 'AIzaSyCXXF5WGC165pt5qZpTd3h7fwwgNMLTivE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});