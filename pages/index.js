import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whitehat Senior</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className={styles.main2}>
          <div className={styles.side}>
              <Header />
              <Nav />
          </div>
          <div className={styles.main}>
            <div className={styles.maincon}>
              <h1 className={styles.title}>
                Welcome to Whitehat Senior !
              </h1>

              <p className={styles.description}>
                The technical community of {' '}
                <code className={styles.code}>IIIT Pune students</code>
              </p>
            </div>
            <Footer />
          </div>
        </main>
    </div>
  )
}
