import axios from "axios";

export const options = {
    method: 'GET',
    params: { limit: '50' },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

//The fetch function we created to fetch the API's with it
export const FetchFromAPI = async (url, options) => {
    const response = await axios.request(url, options);
    const data = response.data;
    return data;
}