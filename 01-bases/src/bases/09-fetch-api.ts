import type { PhotosResponse } from "../interfaces/git.response";


const apiKey = 'It7edgayklLtV9jdLyniA7rrK8-J-Qh1XiwwPDHnivI';


fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}`)
     .then(resp => resp.json())  // Primero se reestructura la respuesta a formato json para utilizar cada valor en el body
     .then((body: PhotosResponse) => {
      console.log(body[0].urls.small);
     }) // solamente puedo acceder a los valores de la respuesta si la respuesta es un json
     .catch(err => console.info(err));

//api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

