import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-52c1c.firebaseio.com/'
});

export default instance;