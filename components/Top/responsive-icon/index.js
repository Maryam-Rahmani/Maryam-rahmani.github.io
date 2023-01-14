import Image from 'next/image';
import styles from './Responsive.module.scss';

const Responsive = () => {
  return(
    <div className={styles.responsive}>
      <Image
          className={styles.row2_img_left}
          src={'/Logo.svg'}
          alt='img'
          width={24}
          height={24}
        />
        <span className={styles.responsive_text}>ویتسل</span>
    </div>
  )    
}

export default Responsive