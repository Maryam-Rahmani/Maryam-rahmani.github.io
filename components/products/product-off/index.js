import Image from 'next/image';
import styles from './ProductOff.module.scss'

const Products = (src, width, height, zIndex) => {
  return(
    <div className={styles.product_info} style={{zIndex: `${zIndex}`}}>
      <Image
        src={src}
        alt='img'
        width={width}
        height={height}
      />
      <div className={styles.product_price}>
        <div className={styles.product_price_up}>
          <span className={styles.product_price_up_right}>۴,۳۴۳,۰۰۰</span>
          <span className={styles.product_price_up_left}>تومان</span>
        </div>
        <div className={styles.product_price_down}>
          <div className={styles.product_price_down_discount}>
            <span className={styles.product_price_down_text}>۳۴٪</span>
          </div>
          <span className={styles.product_price_down_left}>۴,۳۴۳,۰۰۰</span>
        </div>
      </div>
    </div>
  )   
}

export default Products