import { useContext, useState } from 'react';
import { movieContext } from '../../context/movies/moviesContext';
import { Container, Row, Button, Col, Card, Collapse } from "react-bootstrap";

const Collapsed = () => {

  const { characters } = useContext(movieContext);
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Button className="d-block m-auto"
        onClick={() => setOpen(!open)}
        aria-controls="collapse-characters"
        aria-expanded={open}
      >
        View Characters
      </Button>
      <Collapse in={open}>
        <div id="collapse-characters">
          <Row className="my-3">
            {characters.length !== 0 ? (
              characters.map((personaje) => {
                return (
                  <Col md={4} className="my-3" key={personaje.cast_id}>
                    <Card>
                      <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w300${personaje.profile_path}`} className="img-thumbnail" />
                      <Card.Body>
                        <Card.Title>
                          {personaje.name}
                        </Card.Title>
                        <Card.Subtitle>
                          Acting: {personaje.character}
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            ) : null}
          </Row>
        </div>
      </Collapse>
    </Container>
  );
}

export default Collapsed;