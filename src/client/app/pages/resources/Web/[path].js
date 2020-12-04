import { useRouter } from 'next/router'
import Content from '../../../components/Content';
import t from '../../../tags.json';
import ResNav from '../../../components/ResourceNav';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import styles from '../../../styles/Home.module.css'

export default function Unknown({data}) {

    const {path} = useRouter().query;
    return(
        <main className={styles.main2}>
            <div className={styles.side}>
                <Header />
                <Nav />
            </div>
            <div className={styles.main}>
                <div className={styles.maincon}>
                    <div className={styles.main2}>
                        <div className={styles.main}>
                            <ResNav head="Web" />
                        </div>
                        <div>
                            <p>
                                {t[path].map((val2, index2) => {
                                    return (
                                        <li key={index2} className="row">
                                            <h4>{val2}</h4> {/* HTML*/}
                                            <ul>
                                            {data[val2].map((v, ind, err) => {
                                                return (
                                                    <li key={ind} className="row">
                                                        <Content key={ind} d= {v} />
                                                    </li>
                                                );
                                            })}
                                            </ul>
                                        </li>
                                    );
                                })}
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}

export async function getServerSideProps() {

    // ToDO: Using names find the appropriate content from api

    const options = {
        url: 'https://whitehat-sr-server.herokuapp.com/api/getcontent',
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
          tags: ['Web']
        }
      };
    const res = await axios(options)
    const data = res.data

    for(let i=0;i< t["tags"].length; i++){
        if(data[t["tags"][i]] === undefined){
            data[t["tags"][i]] = []
        }
    }

    return { props: { data } }
  }