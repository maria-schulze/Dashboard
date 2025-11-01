import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


export function Login() {
    return (
        <>
            <Container>
                <Navbar className="mb-3"bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#">Minha App</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>

            <Container>
                <Card>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Entrar
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

