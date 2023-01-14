import Link from 'next/link';
import Image from 'next/image';
import Products from '../products/product-off/index';
import styles from './BestSal.module.scss';

const BestSal= () => {
  return (
    <div className={styles.best}>
      <div className={styles.best_title}>
        <div className={styles.best_title_links}>
          <Image
            src='/arrow-small-left.png'
            alt='img'
            width={16}
            height={16}
          />
          <span className={styles.best_title_links_text}>مشاهده همه</span>
        </div>
        <div className={styles.best_vector}></div>
        <div className={styles.best_title_label}>
          <span className={styles.best_title_label_text}>تخفیف های ویتسل</span>
          <div className={styles.best_title_label_img}>
            <Image
              src='/magic-star.png'
              alt='img'
              width={21.31}
              height={21.5}
            />
          </div>
        </div>
      </div>
      <div className={styles.best_slider}>
        <Products src={'/image shoes.png'} width={112} height={112} zIndex={6}/>
        <Products src={'/image shoes.png'} width={112} height={112} zIndex={5}/>
        <Products src={'/image shoes.png'} width={112} height={112} zIndex={4}/>
        <Products src={'/image shoes.png'} width={112} height={112} zIndex={3}/>
        <Products src={'/image shoes.png'} width={112} height={112} zIndex={2}/>
        <Products src={'/image shoes.png'} width={112} height={112} zIndex={1}/>
        <Products src={'/image shoes.png'} width={112} height={112} zIndex={0}/>
        <Image
          className={styles.timer_arrow_img_right}
          src="/arrow-right.png"
          alt="img"
          width={38.5}
          height={92.5}
        />
        <Image
          className={styles.timer_arrow_img_left}
          src="/arrow-left.png"
          alt="img"
          width={38.5}
          height={92.5}
          />
      </div>    
    </div>
  )
}

export default BestSal