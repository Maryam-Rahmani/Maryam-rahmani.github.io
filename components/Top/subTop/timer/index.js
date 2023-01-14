import Image from 'next/image';
import styles from './Timer.module.scss';

const Timer = () => {
  return (
    <div className={styles.timer}>
      <Image
        src="/image 27.png"
        alt="img"
        width={204}
        height={204}
      />
      <div className={styles.timer_info}>
        <span className={styles.timer_text}>
        همزن برقی Sanford
        </span>
        <div className={styles.timer_prices}>
          <div className={styles.price_up}>
            <span className={styles.price_up_right}>۴,۳۴۳,۰۰۰</span>
            <span className={styles.price_up_left}>تومان</span>
          </div>
          <div className={styles.price_down}>
            <span className={styles.price_down_left}>۴,۳۴۳,۰۰۰</span>
            <div className={styles.price_down_discount}>
              <span className={styles.price_down_text}>۳۴٪</span>
            </div>
          </div>
        </div>
      </div>
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
  );
};

export default Timer;
