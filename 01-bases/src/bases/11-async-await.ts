import type { PhotosResponse } from "../interfaces/git.response";
import { photosAPI } from "./10-axios";

// Async Await
export const getPhotos = async () => {
  //permite incorporar codigo asincrono que se comporta de manera sincrona

  try {
    // las execpciones se manejan con try catch
    const res = await photosAPI.get<PhotosResponse>("/photos");
    return res.data;
  } catch (error) {
    throw new Error("url no encontrada");
  }
};

// Async Await con promesas
export const getPhotosPromise = () => {
  return new Promise((resolve, reject) => {
    resolve("https://ejemplo-de-api.com/photos");
    reject("No se pudo encontrar la url");
  });
};

getPhotos()
    .then((url) => console.log(url))
    .catch((err) => console.error(err));


//console.log(getPhotos());
//console.log(getPhotosPromise());
