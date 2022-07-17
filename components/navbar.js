import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'react-grid-system';

export default function navbar() {
    return (
        <div>
            <header>
                <Container fluid>
                    <Row>
                    <Col sm={7}>
                        <Link href="/">
                            <Image src={"/Matrixtudios_Logo.png"} width= '152px' height= '100px'/>
                        </Link>
                    </Col>
                    <Col sm={1}>
                        <br />
                        <br />
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </Col>
                    <Col sm={1}>
                        <br />
                        <br />
                        <Link href="/services">
                            <a>Services</a>
                        </Link>
                    </Col>
                    <Col sm={1}>
                        <br />
                        <br />
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </Col>
                    <Col sm={2}>
                        <br />
                        <br />
                        <Link href="/contact-us">
                            <a>Contact Us</a>
                        </Link>
                    </Col>
                    </Row>
                </Container>
            </header>
            
            <style jsx>{`
                header { 
                    margin-top: 1.5rem;
                    margin-left: 5.0rem;
                }
            
            `}</style>

            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }

                * {
                box-sizing: border-box;
                }
            `}</style>
        </div>
    )
}