import Head from 'next/head'
import Payment from '../comps/Payment';
import Plan from '../comps/Plan';
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>  
      <Head>
        <title>Payment</title>
      </Head>
    <div className={styles.container}>
      <Plan/>
      <Payment/>
    </div>
    </>
  );
}
 
export default Home;