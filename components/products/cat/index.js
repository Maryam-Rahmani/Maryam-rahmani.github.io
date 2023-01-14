import Image from 'next/image';
import styles from './Cat.module.scss';


const Cat = (src, width, height, text) => {
  return (
    <div className={styles.cat}>
      <Image
        className={styles.cat_img}
        src={src}
        alt='img'
        width={width}
        height={height}
      />
      <span className={styles.cat_text}>{text}</span>      
    </div>
  )  
}

export default Cat