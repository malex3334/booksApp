import { useState, useCallback } from 'react';

function useFetch(searchValue, library, setSlice) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const url = 'https://www.googleapis.com/books/v1/volumes?q=';
  const maxResults = '40';

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    setSlice(8);
    try {
      const response = await fetch(
        `${url}+${searchValue}&maxResults=${maxResults}&key=AIzaSyAJHG4L-BIzTSK16ng9k0hrqqRE5zCFlQY`
      );
      const data = await response.json();
      // filter if in library
      const checkLib = await data.items.map((item) => {
        const filtr = library?.find((element) => element.id === item.id);
        if (filtr) {
          return { ...item, library: true };
        } else return { ...item, library: false };
      });
      setData(checkLib);

      // setData(data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }, [searchValue]);

  return { fetchBooks, setData, data, setLoading, loading, error };
}


export default useFetch;
