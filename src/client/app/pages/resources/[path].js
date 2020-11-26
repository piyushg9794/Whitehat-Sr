import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import t from '../../tags.json'

export default function Unknown() {

    const router = useRouter();
    const {path} = router.query;
    console.log(path);
    router.push('/resources/'+path+ '/'+t[t[path][0]][0])
    return(
        <div className={styles.container}>

            <main className={styles.main}>

                <p className={styles.description}>
                 Loading ...
                </p>


            </main>
        </div>
    )
}