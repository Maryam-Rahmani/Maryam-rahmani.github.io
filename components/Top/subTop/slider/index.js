import Image from 'next/image';
import styles from './Slider.module.scss';

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slider_info}>
        <Image
          className={styles.slider_img_rec}
          src="/Rectangle 2434.png"
          alt="img"
          width={33}
          height={8}
        />
        <Image
          className={styles.slider_img_circle}
          src="/Rectangle 2433.png"
          alt="img"
          width={8}
          height={8}
        />
        <Image
          className={styles.slider_img_circle}
          src="/Rectangle 2433.png"
          alt="img"
          width={8}
          height={8}
        />
          <Image
          className={styles.slider_img_circle}
          src="/Rectangle 2433.png"
          alt="img"
          width={8}
          height={8}
        />
        <Image
          className={styles.slider_img_circle}
          src="/Rectangle 2433.png"
          alt="img"
          width={8}
          height={8}
        /> 
      </div>
      <Image
        className={styles.slider_arrow_img_right}
        src="/arrow-right.png"
        alt="img"
        width={38.5}
        height={92.5}
      />
      <Image
        className={styles.slider_arrow_img_left}
        src="/arrow-left.png"
        alt="img"
        width={38.5}
        height={92.5}
        />
      <Image
        className={styles.slider_background}
        src="/image 26.png"
        alt="img"
        width={902}
        height={373}
        />
    </div>
  );
};

export default Slider;
