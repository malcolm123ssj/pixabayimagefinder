import { useEffect, useState } from 'react';
import pixabay from '../api/pixabay';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      const response = await pixabay.get('/', {
        params: {
          key: '16670603-4ac5e7d0e125206376830c293',
          q: searchTerm,
          image_type: 'photo',
          safesearch: true,
          amount: 50
        }
      });
      setResults(response.data.hits);
    } catch (err) {
      setErrorMessage('Search failed bro!');
    }
  };

  useEffect(() => {
    searchApi('welcome');
  }, []);

  return [searchApi, results, errorMessage];
};