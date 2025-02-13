import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "48789151-f51ae4d97727bedfe2d09c642";

export async function fetchImages(value) {
    const params = {
        key: API_KEY,
        q: value,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    };

    try {
        const response = await axios.get(BASE_URL, { params });
        return response.data;
    } catch (error) {
        iziToast.error({
            position: "topRight",
            message: "Error fetching images. Please try again!",
        });
        return { hits: [] };
    }
}