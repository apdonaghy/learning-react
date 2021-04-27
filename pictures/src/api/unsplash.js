import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID JNmiknyRA49DznVn8GPBfLRnx6nJ5qSB6QKU-QeANs0'
    }
});

