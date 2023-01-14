import Image from 'next/image';
import styles from './Row2.module.scss';


const Row2 = () => {
  return (
    <div className={styles.row2}>
      <div className={styles.row2_slider_left}>
        <Image
          className={styles.row2_img_left}
          src={'/image 29.png'}
          alt='img'
          width={592}
          height={210}
        />
      </div>
      <div className={styles.row2_slider_right}>
        <Image
          className={styles.row2_img_right}
          src={'/image 28.png'}
          alt='img'
          width={592}
          height={210}
        />
      </div>
    </div>
  )  
}

export default Row2