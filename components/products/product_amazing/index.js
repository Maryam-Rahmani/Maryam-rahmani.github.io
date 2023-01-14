import Image from 'next/image';
import styles from './ProductAmazing.module.scss';


const ProductAmazing = () => {
  return (
    <div className={styles.productAmazing}>
      <Image
        src="/amazing-bag.png"
        alt="img"
        width={88}
        height={88}
      /> 
      <div className={styles.productAmazing_info}>
        <span className={styles.productAmazing_info_text}>کتونی نایک شماره ۱۲۱</span>
        <div className={styles.productAmazing_prices}>
          <div className={styles.amazing_price_up}>
          <span className={styles.amazing_price_up_left}>تومان</span>
            <span className={styles.amazing_price_up_right}>۴,۳۴۳,۰۰۰</span>
          
          </div>
          <div className={styles.amazing_price_down}>
            <span className={styles.amazing_price_down_left}>۴,۳۴۳,۰۰۰</span>
            <div className={styles.amazing_price_down_discount}>
              <span className={styles.amazing_price_down_text}>۳۴٪</span>
            </div>
          </div>
        </div>
       
      </div> 
        <Image
           className={styles.amazing_fire}
          src="/Fire.png"
          alt="img"
          width={15.89}
          height={20}
        /> 
    </div>
  )  
}

export default ProductAmazing