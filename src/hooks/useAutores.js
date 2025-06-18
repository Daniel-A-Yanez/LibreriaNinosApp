import { useState, useEffect } from 'react';

const useAutores = () => {
  const [autoresData, setAutoresData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAutores = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await fetch('https://mock.apidog.com/m1/879682-861157-default/autores');
        if (!response.ok) throw new Error('Error al obtener los datos');
        const data = await response.json();
        setAutoresData(data);
      } catch (err) {
        console.error(err);
        setError(err.message || 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchAutores();
  }, []);

  return { autoresData, loading, error };
};

export default useAutores;