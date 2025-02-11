import SimpleLightbox from "simplelightbox"; 
import "simplelightbox/dist/simple-lightbox.min.css"; 

 
 
 export function fetchImages(value){
    const BASE_URL = "https://pixabay.com";
    const END_POINT = "/api/";
    const params = new URLSearchParams({
        key: "48789151-f51ae4d97727bedfe2d09c642",
        q: value,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });


    const url = `${BASE_URL}${END_POINT}?${params}`;

    return fetch(url)
    .then(res => res.json());
 }