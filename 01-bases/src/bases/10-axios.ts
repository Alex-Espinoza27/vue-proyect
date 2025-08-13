// > npm i axios
import axios from 'axios';
import { PhotosResponse } from '../interfaces/git.response';

const client_id = 'It7edgayklLtV9jdLyniA7rrK8-J-Qh1XiwwPDHnivI';
//`https://api.unsplash.com/photos/?client_id=${apiKey}`
export const photosAPI = axios.create({
    baseURL: 'https://api.unsplash.com',
    params: {
        client_id: client_id

    },
});

// photosAPI.get<PhotosResponse>('/photos')
//    .then (respone => console.log(respone.data)) // axios siempre pone "data" en la respuesta
//    .catch(err => console.error(err));





