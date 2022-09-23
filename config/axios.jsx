import axios from 'axios'

const axiosFetch = axios.create({ /*axiosFetch será un objeto que al ser llamado realizará una petición GET ya que  "las peticiones serán por defecto GET si method no es especificado" https://axios-http.com/es/docs/req_config */
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTQ2OTgyYzBiNWUxYWUzYWVhYzJiYjBkYWVlOGZmMiIsInN1YiI6IjYzMmIwYTFhNmFmOWRkMDA4MjFhOWNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bozJJhHZ5h1HpdnT7hk9sOlT8BfjPU8QyaNlvayLdSk'
  }
});

export default axiosFetch;