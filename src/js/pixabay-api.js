const API_KEY = '43912806-71f58de8c72d31bf72d9e0bfd';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotosByQuery = (query = 'cat') => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    orientation: 'horizontal',
  });

  return fetch(`${BASE_URL}?${searchParams.toString()}`).then(response => {
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return response.json();
  });
};
