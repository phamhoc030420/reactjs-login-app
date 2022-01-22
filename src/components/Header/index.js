import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Col, Container, Row } from 'reactstrap';
import './Header.scss';

function Header() {
    const history = useHistory();
    const handleHome = () => {
        history.push("/");
    }
    return (
        <>
            <header className='header'>
                <Container>
                    <Row className='justify-content-between'>
                        <Col xs="auto">
                            <Button color='primary' onClick={handleHome}>Home</Button>

                        </Col>
                        <Col xs="auto">
                            <p className='header_link header_title' >
                                Pham Hoc
                            </p>

                        </Col>
                        <Col xs="auto">
                            <NavLink exact
                                className='header_link' to='/photos'
                            >Redux Project</NavLink>

                        </Col>

                    </Row>
                </Container>

            </header>
        </>
    )
}
export default Header;