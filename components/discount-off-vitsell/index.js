import Link from 'next/link';
import Image from 'next/image';
import Products from '../products/product-off/index'
import styles from './VitSellOff.module.scss'



const VitSellOff = () => {

  return (
    <div className={styles.off}>
      <div className={styles.off_title}>
        <div className={styles.off_title_label}>
          <div className={styles.off_title_label_img}>
            <Image
              src='/ticket-discount-red.png'
              alt='img'
              width={21.50}
              height={17.50}
            />
          </div>
          <span className={styles.off_title_label_text}>تخفیف های ویتسل</span>
        </div>
        <div className={styles.off_vector}></div>
        <div className={styles.off_title_links}>
        <span className={styles.off_title_links_text}>مشاهده همه</span>
          <Image
            src='/arrow-small-left.png'
            alt='img'
            width={16}
            height={16}
          /> 
        </div>
        
      </div>
      <div className={styles.off_slider} >
        <Products src={'/image shoes.png'} width={112} height={112} zIndex={0}/>
        <Products src={'/image shoes.png'} width={112} height={112} zIndex={1}/>
        <Products src={'/image shoes.png'} width={112} height={112} zIndex={2}/>
        <Products src={'/image shoes.png'} width={112} height={112} zIndex={3}/>
        <Products src={'/image shoes.png'} width={112} height={112} zIndex={4}/>
        <Products src={'/image shoes.png'} width={112} height={112} zIndex={5}/>
        <Products src={'/image shoes.png'} width={112} height={112} zIndex={6}/>
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

export default VitSellOff