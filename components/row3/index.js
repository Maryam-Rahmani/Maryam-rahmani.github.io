import Image from 'next/image';
import styles from './Row3.module.scss';


const Row3 = () => {
  return (
    <div className={styles.row3}>
      <div className={styles.row3_col}>
        <Image
          className={styles.row3_img}
          src={'/kafsh.png'}
          alt='img'
          width={592}
          height={189}
        />
        <Image
          className={styles.row3_img}
          src={'/dandan.png'}
          alt='img'
          width={592}
          height={189}
        />
      </div>
      <div className={styles.row3_slider}>
        <Image
          className={styles.row3_img_right}
          src={'/pixel.png'}
          alt='img'
          width={592}
          height={394}
        />
      </div>
    </div>
  )  
}

export default Row3