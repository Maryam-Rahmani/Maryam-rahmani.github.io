import Image from 'next/image';
import styles from './Permit.module.scss';


const Permit = () => {
  return (
    <div className={styles.footer_serts}>
        <div className={styles.footer_serts_img_res}>
          <Image
            src={'/melli.png'}
            alt='img'
            width={54}
            height={54}
          />
        </div>
        <div className={styles.footer_serts_img_res}>
          <Image
            src={'/virual.png'}
            alt='img'
            width={54}
            height={54}
          />
        </div>
        <div className={styles.footer_serts_img_res}>
        <Image
          src={'/zarin.png'}
          alt='img'
          width={54}
          height={54}
        />
        </div>
        <div className={styles.footer_serts_img_res}>
          <Image
            src={'/govahi.png'}
            alt='img'
            width={54}
            height={54}
          />
        </div>
      <div className={styles.footer_serts_img_top}>
        <Image
          src={'/melli.png'}
          alt='img'
          width={110}
          height={110}
        />
      </div>
      <div className={styles.footer_serts_img_bottom}>
        <Image
          src={'/virual.png'}
          alt='img'
          width={110}
          height={110}
        />
      </div>
    </div>
  )
}

export default Permit