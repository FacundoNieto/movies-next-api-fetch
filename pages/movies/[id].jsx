import { useContext, useEffect } from "react";
import { movieContext } from '../../context/movies/moviesContext' /*es el contexto creado para poder pasar información entre componentes sin respetar las jerarquías */
import { Container } from "react-bootstrap";
import { getMovies } from "../../helpers/crud";


import Movies from "../../components/Movies";

const MoviesId = ({data}) => { /*data proviene de la función getServerSideProps() */
  // console.log("data >> ", data);
  const { movie, characters } = data;

  const { getMovieById, getCharacters } = useContext(movieContext); //invoco la variable global (contexto) creada en moviesContex.jsx
  // console.log("_movieContext >> ", _movieContext);

  useEffect(()=>{
    // getMovieById(data.movie); //así ya carga los datos en la variable global (contexto), pero es bueno asegurarse de que exista "data" antes de hacer la carga
    // getCharacters(data.characters); //así ya carga los datos en la variable global (contexto), pero es bueno asegurarse de que exista "data" antes de hacer la carga

    if(Object.keys(data).length !== 0){
      getMovieById(movie); //movie = data.movie 
      getCharacters(characters.cast); //characters.cast = data.characters.cast
    }

  } , [data]);
  
  return(
    <Container>
      <Movies />
    </Container>
  );
}

// todo lo que sucede en la función getServerSideProps() sucede en el servidor, por lo que los console.log
// solo pueden verse en la terminal de VSC... no en la consola del browser (google o brave)


export async function getServerSideProps(ctx){ /*qué es ctx? */
  //console.log('ctx.params.id -->', ctx.params.id )
  
  const {id} = ctx.params;

  // const movie = await getMovies(`/movie/${id}`)
  // console.log('movie ---->', movie)

  // const characters = await getMovies(`/movie/${id}/credits`)
  // console.log('characters ---->', characters)

  //con Promise.all() se pueden hacer las llamadas a funciones asíncronas que se quieran y el resultado de todas esas llamadas se alamacenan en una sola variable, esto es necesario para que la función getServerSideProps() pueda retornar una única clave (que se denominará "data") en la clave props del objeto que retorna la función getServerSideProps (como pide la documentación)
  
  //fijate que desestructuramos el array que devuelve Promise.all, así tenemos un objeto que contiene a los otros objetos (movie y characters)
  const [result] = await Promise.all([{ //metemos las dos llamadas a funciones asíncronas que necesitamos DENTRO de un array de objetos. Devuelve un array que contiene un objeto, y este objeto contiene a los otros dos objetos (movie y characters)!
    movie: await getMovies(`/movie/${id}`),
    characters: await getMovies(`/movie/${id}/credits`)
  }])

  // console.log('result-->', result)

  return{
    props: {
      data: result
    },
  }
}



export default MoviesId;