import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Matrixtudios</title>
        <link rel="icon" href="/Matrixtudios_Logo.ico" />
      </Head>

      <main>
        <h1 className="title">
          Matrixtudios
        </h1>

        <p className="description">
          Provide you a whole new experience of virtual reality<br />
          and augmented reality to your life.
        </p>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          margin-bottom: 6.25rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .title {
          margin-top: 5.5rem;
          margin-left: 5.0rem;
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
          margin-left: 5.0rem;
          line-height: 1.5;
          font-size: 1.25rem;
        }
      `}</style>
    </div>
  )
}
