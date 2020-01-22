import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6f2254f6db1abc0b91125e1d0880cc3a9bcdd3c1d60c02dac9e162ae30947ae1'
    }
})

