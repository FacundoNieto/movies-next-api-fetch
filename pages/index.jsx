import Container from 'react-bootstrap/Container';
import MovieList from '../components/MovieList'

const HomePage = () => {
  return (
    <Container> {/* es un componente de bootstrap */}

      <h1 className="text-center my-3"> Movies </h1>

      <MovieList />

    </Container>

  )
}
export default HomePage;