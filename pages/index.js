import Head from 'next/head';
import Responsive from '/components/Top/responsive-icon/index'
import Top from '../components/Top';
import VitSellOff from '../components/discount-off-vitsell/index'
import Categories from '../components/Categories';
import Row2 from './../components/row-2/index';
import Amazing from '../components/discount-amazing/index';
import BestSal from '../components/discount-best-sal/index';
import Row3 from '../components/row3/index';
import VitSell from '../components/discount-vistell-for-ever/index';
import  Footer from '../components/footer/index';
import styles from '../styles/Home.module.scss';


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>ویتسل</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Responsive />
      <Top />
      <VitSellOff />
      <Categories />
      <Row2 />
      <Amazing />
      <BestSal />
      <Row3 />
      <VitSell />
      <Footer />
    </div>
  );
}