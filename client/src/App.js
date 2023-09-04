import { Container, Row, Col } from "react-bootstrap";
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      <Container className="text-center">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Todo />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
