import {create} from 'axios';

export default create({
    baseURL: '/api',
    headers: {
        'Authorization': localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});