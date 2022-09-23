/*componente que se encargará de actualizar un estado */

import { GET_MOVIES, GET_MOVIE_BY_ID, GET_CHARACTERS } from "./moviesContext"

const moviesReducer = (state, action) => { /*la primera vez que se renderiza la página (ver moviesContext.jsx) a la variable "state" se le carga un objeto con los atributos movie y movies pero vacíos. Debido a que dispatch tiene un objeto con el atributo type = "GET_MOVIES" se procede a actualizar el valor de state*/
  switch (action.type) {
    case GET_MOVIES:
      return (
        { ...state, movies: action.payload } /*ver minuto 7:20 del video 10: se cambia el valor del atributo state (que es el valor de la variable state en el llamado a useReduce) por el valor del array almacenado en data.results (ver objeto argumento de dispatch en moviesContext.jsx) */
      );
    case GET_MOVIE_BY_ID:
      return (
        { ...state, movie: action.payload } /*ver minuto 2 del video 14*/
      );
    case GET_CHARACTERS:
      return (
        { ...state, characters: action.payload } /*ver minuto 2 del video 14*/
      );
    default:
      return state;
  }


}

export default moviesReducer;