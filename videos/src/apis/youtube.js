import axios from 'axios'

const KEY = 'AIzaSyDN9_DE3AgyUalm-WYcH_jJPQZE1-LQPdI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})