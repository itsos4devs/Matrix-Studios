import Head from 'next/head'
import Image from 'next/image'
import { Container, Row, Col } from 'react-grid-system';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Matrixtudios</title>
        <link rel="icon" href="/Matrixtudios_Logo.ico" />
      </Head>

      <header>
        <Container fluid>
          <Row>
            <Col sm={7}>
              <Image src={"/Matrixtudios_Logo.png"} width= '152px' height= '100px'/>
            </Col>
            <Col sm={1}>
              <br></br>
              <br></br>
              Home
            </Col>
            <Col sm={1}>
              <br></br>
              <br></br>
              Services
            </Col>
            <Col sm={1}>
              <br></br>
              <br></br>
              About
            </Col>
            <Col sm={2}>
              <br></br>
              <br></br>
              Contact Us
            </Col>
          </Row>
        </Container>
      </header>

      <main>
        <h1 className="title">
          Matrixtudios
        </h1>

        <p className="description">
          Provide you a whole new experience of virtual reality<br />
          and augmented reality to your life.
        </p>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        header {
          margin-top: 1.0rem;
        }

        .headerItem{
          margin-top: 10rem;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;

        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin-top: 5.0rem;
          margin-left: 1.5rem;
          margin-bottom: 0rem;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: left;
        }

        .description {
          margin-top: 0.5rem;
          margin-left: 1.5rem;
          line-height: 1.5;
          font-size: 1.25rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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
