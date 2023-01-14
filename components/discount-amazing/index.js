import Image from 'next/image';
import ProductAmazing from '../products/product_amazing/index'

import styles from './Amazing.module.scss';


const Amazing = () => {
  return (
    <div className={styles.amazing}>
      <div className={styles.amazing_title}> 
      <div className={styles.amazing_title_label}>
          <div className={styles.amazing_title_label_img}>
            <Image
              src='/hot-sal.png'
              alt='img'
              width={24}
              height={24}
            />
          </div>
          <span className={styles.amazing_title_label_text}>تخفیف های ویتسل</span>
        </div>
        <div className={styles.amazing_vector}></div>
        <div className={styles.amazing_title_links}>
          <span className={styles.amazing_title_links_text}>مشاهده همه</span>
          <Image
            src='/arrow-small-left.png'
            alt='img'
            width={16}
            height={16}
          />
        </div>
      </div>
      <div className={styles.amazing_content}>
        <div className={styles.amazing_content_timer}>
          <Image
            className={styles.content_timer_img}
            src="/image 27.png"
            alt="img"
            width={204}
            height={204}
          />
        <div className={styles.content_timer_info}>
          <span className={styles.content_timer_text}>
            همزن برقی Sanford
          </span>
          <div className={styles.content_timer_prices}>
            <span className={styles.price_right}>۴,۳۴۳,۰۰۰</span>
            <span className={styles.price_left}>تومان</span>
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
      <div className={styles.amazing_content_left}>
        <div className={styles.amazing_content_left_row}>
          <ProductAmazing />
          <ProductAmazing />
          <ProductAmazing />
        </div>
        <div className={styles.amazing_content_left_row}>
          <ProductAmazing />
          <ProductAmazing />
          <ProductAmazing />
        </div>
        <div className={styles.amazing_content_left_row}>
          <ProductAmazing />
          <ProductAmazing />
          <ProductAmazing />
        </div>
      </div>
      </div>
     
    </div>
  )  
}

export default Amazing