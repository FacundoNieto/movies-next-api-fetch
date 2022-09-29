/*uso este archivo para crear una variable global (contexto) que tenga la información de la API y ciertas 
funciones, por lo que en este archivo se hace el fetch, importando funciones que están declaradas en otros 
archivos para que sean reutilizables y hacer más ordenado el código*/

import { createContext, useEffect, useReducer } from "react";
import moviesReducer from "./moviesReducer"; /*función */
import { getMovies } from "../../helpers/crud"; /*Función asíncrona, fetch */

export const movieContext = createContext(); /* movieContext será un objeto que, haciendo uso de su componente Provider, envolverá otros componentes (en este proyecto lo uso en _app.jsx). Es usado para pasar parámetros entre componentes sin tener que pasarlos como props a cada uno de los componentes que envuelve. Es como si creara una variable global entre los componentes que envuelve */ // https://es.reactjs.org/docs/context.html

export const GET_MOVIES = "GET_MOVIES"; /*esta variable es un tipo (type) que se la pasaremos a una función (dispatch) que, si esta variable existe entonces ejecuta una acción, si esta variable no existe ejecuta otra acción */ 
export const GET_MOVIE_BY_ID = "GET_MOVIE_BY_ID";
export const GET_CHARACTERS = "GET_CHARACTERS";


const MovieWrapper = ({ children }) => {

  const initialState = {
    movies: [],
    movie: {},
    characters: []
  };
  /*el hook useReducer es parecido a useState. Le pasa como parámetro el objeto initialState a la función moviesReducer (será estado inicial de "state"), y esta función moviesReducer devolverá un nuevo valor actualizado de la variable "state" */
  const [state, dispatch] = useReducer(moviesReducer, initialState); /*dispatch recibe un objeto en el que definiremos un atributo llamado type (importante para determinar qué debe hacerse en la función moviesReducer) y otro atributo que tiene la información que va a actualizar al estado (state)*/ 

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies("/movie/popular"); /*el objeto axiosFetch (usado por la función getMovies) ya tiene la primera parte de la URL en su atributo baseURL, entonces sólo le paso la parte final de esa url, en este caso para obtener (GET) todas las películas de la api de TMDB https://developers.themoviedb.org/3/movies/get-popular-movies */ /*retornaba un objeto de muchos elementos, pero solo necesitamos la info almacenada en el objeto llamado "data", por eso se desestructura lo devuelto por axios*/
      // console.log("result: >> ", data);
      if(Object.keys(movies).length !== 0){ /* Object.keys(objeto) devuelve un array donde cada elemento almacena las claves del objeto que se le pasa como argumento  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/keys */
        dispatch({ /*esta función crea un objeto con los atributos necesarios para CAMBIAR lo almacenado en "state". Este objeto será ¿exportado? al archivo moviesReducer.jsx como 2do parámetro de la función moviesReducer, sería el parámetro "action", y lo que hará esa función es primero hacer una copia del estado anterior y luego atualizar el estado con el valor del payload nuevo que se le está pasando al momento de ejecutar esta función (o sea el array data.results)*/
          type: GET_MOVIES,
          payload: movies.results
        })
      }
    };

    fetchMovies();
  }, []);

  const getMovieById = (payload) =>{
    dispatch({
      type: GET_MOVIE_BY_ID,
      payload: payload
    })
  }

  const getCharacters = (payload) =>{
    dispatch({
      type: GET_CHARACTERS,
      payload: payload
    })
  }

  return (
    <movieContext.Provider /*este Provider genera que el objeto almacenado en "value" sea pasado a todos los children, más precisamente permite pasarlo a lo profundo del árbol de componentes sin pasarlo explícitamente a través de cada componente https://es.reactjs.org/docs/context.html*/
      value={{
        movies: state.movies,
        movie: state.movie,
        characters: state.characters,

        getMovieById,
        getCharacters
      }}
    >
      {children}
    </movieContext.Provider>
  );
}

export default MovieWrapper;