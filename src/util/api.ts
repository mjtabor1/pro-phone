export interface ImageDetails {
  id: number;
  webformatURL: string;
  views: number;
  downloads: number;
  likes: number;
  tags: string;
}

export interface ImagesResponse {
  total: number;
  totalHits: number;
  hits: ImageDetails[];
}

const BASE_URL = 'https://pixabay.com/api/'

const api_key = process.env.REACT_APP_PIXABAY_KEY;

export const fetchImages = async (filter?: string): Promise<ImagesResponse> => {
  let endpoint;
  if (filter) {
    endpoint = `${BASE_URL}?key=${api_key}&q=${filter}&image_type=photo`
  } else {
    endpoint = `${BASE_URL}?key=${api_key}&image_type=photo`
  }

  const data = await (await fetch(endpoint)).json();
  return data;
}

export const fetchImage = async (id: string): Promise<ImagesResponse> => {
  const endpoint = `${BASE_URL}?key=${api_key}&id=${id}`
  console.log(endpoint);
  return await (await fetch(endpoint)).json();
}
