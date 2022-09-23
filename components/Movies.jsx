import { movieContext } from '../context/movies/moviesContext';
import { useContext } from 'react';
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import Collapsed from './ui/Collapsed';

const Movies = () => {

  // const _movieContext = useContext(movieContext);
  // console.log("_movieContext es >> ", _movieContext);
  const { movie /*,characters*/ } = useContext(movieContext);
  // console.log("movie es >> ", movie);
  // console.log("characters es >>", characters);

  return (
    <Container>
      <h1 className="text-center my-5"> {movie.original_title} </h1>
      <Row>
        <Col md={4}>
          <Image src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} thumbnail />
        </Col>
        <Col md={8}>
          <Container>
            <p>{movie.overview}</p>
            <p> <b>Release Date</b> {movie.release_date} </p>
            <p> <b>Home Page:</b> {movie.homepage}</p>
          </Container>
          <Container>
            <Collapsed /> {/*componente creado y declarado en la carpeta ui */}
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Movies;