import Image from 'next/image';
import styles from './Row.module.scss'

const Row = () => {
  return (
    <div className={styles.row}>
      <Image
        className={styles.row_img_left}
        src="/image 28.png"
        alt="img"
        width={592}
        height={210}
      />
       <Image
        className={styles.row_img_left_copy}
        src="/image 28.png"
        alt="img"
        width={592}
        height={210}
      />
      <Image
        className={styles.row_img_right}
        src="/image 29.png"
        alt="img"
        width={592}
        height={210}
      />    
    </div>
  )
}

export default Row