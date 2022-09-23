import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap'
import { useContext } from 'react';
import { movieContext } from '../context/movies/moviesContext' /*es el contexto creado para poder pasar información entre componentes sin respetar las jerarquías */
import Link from 'next/link';

const MovieList = () => {

  //const movies = useContext(movieContext); /*Se invoca a la variable global o contexto creado en moviesContext.jsx. Se almacena en "movies" el valor asignado al atributo "value" del componente movieContext.Provider (moviesContext.jsx) */
  const { movies } = useContext(movieContext); //solo quiero saber la info del atributo movies del objeto almacenado en movieContext
  if (movies.length !== 0) {
    // console.log("movies: >> ", movies);
  }

  return (
    <Row>

      {movies.length !== 0 ? (
        movies.map(pelicula => {
          return (
            <Col md={4} className="my-3" key={pelicula.id}> {/*con md=4 divido la grilla de 12 (dada por bootstrap) en 4 partes, como se hace en css */}
              <Card>
                <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w300${pelicula.backdrop_path}`} className="img-thumbnail" />
                <Card.Body>
                  <Card.Title>
                    <Link href={`/movies/${pelicula.id}`}>
                      {pelicula.original_title}
                    </Link>
                  </Card.Title>
                  <Card.Text>
                    {pelicula.overview}
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                  <Card.Subtitle>Release Date: {pelicula.release_date}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          )
        })
      ) : null}

    </Row>
  );
}

export default MovieList;