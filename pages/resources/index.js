import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Resources({route}) {
    return(
        <main className={styles.main2}>
            <div className={styles.side}>
                <Header />
                <Nav />
            </div>
            <div className={styles.main}>
                <div className={styles.maincon}>
                    <div className={styles.gridcontainer}>
                        <div className={styles.grid}>

                            <Link href="">
                                <a className={styles.card}>
                                    <p>Must of development &rarr;</p>
                                </a>
                            </Link>

                            <Link href="/resources/Web/Frontend Basics">
                                <a className={styles.card}>
                                    <p>Web Development &rarr;</p>
                                </a>
                            </Link>

                            <Link href="/resources/App">
                                <a className={styles.card}>
                                    <p>App Development &rarr;</p>
                                </a>
                            </Link>

                            <Link href="/resources/Quantum" >
                                <a className={styles.card}>
                                    <p>Quantum Computing &rarr;</p>
                                </a>
                            </Link>

                            <Link href="/resources/Blockchain">
                                <a  className={styles.card}>
                                    <p>Blockchain &rarr;</p>
                                </a>
                            </Link>

                            <Link href="/resources/Ai">
                                <a className={styles.card}>
                                    <p>Artificial Intelligence (ML/DL) &rarr;</p>
                                </a>
                            </Link>

                            <Link href="/resources/Analytics">
                                <a className={styles.card}>
                                    <p> Analytics & Data Science &rarr;</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}