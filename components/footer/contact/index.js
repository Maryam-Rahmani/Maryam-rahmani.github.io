import Image from 'next/image';
import styles from './Contact.module.scss';


const Contact = () => {
  return (
    <div className={styles.footer_contact}>
      <span className={styles.footer_contact_text}>ارتباط با ویتسل</span>
      <div className={styles.footer_contact_info}>
        <div className={styles.footer_contact_info_tel}>
          <span className={styles.footer_contact_info_tel_text}>ٰvitdell@gmail.com</span>
          <Image
            className={styles.row2_img_left}
            src={'/send.png'}
            alt='img'
            width={24}
            height={24}
          />
        </div>
        <div className={styles.footer_contact_info_phone}>
        <span className={styles.footer_contact_info_phone_text}>۰۸۴۷۷۴۷۳۲۲</span>
          <Image
            className={styles.row2_img_left}
            src={'/call.png'}
            alt='img'
            width={24}
            height={24}
          />
        </div>
        <div className={styles.footer_contact_info_map}>
          <span className={styles.footer_contact_info_map_text}>
            خیابان ولی عصرنرسیده به سینما آفریقا
          </span>
          <Image
            className={styles.row2_img_left}
            src={'/map.png'}
            alt='img'
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className={styles.footer_contact_social}>
        <Image
          className={styles.row2_img_left}
          src={'/Card-phone.png'}
          alt='img'
          width={40}
          height={40}
        />
        <Image
          className={styles.row2_img_left}
          src={'/Card-send.png'}
          alt='img'
          width={40}
          height={40}
        />
        <Image
          className={styles.row2_img_left}
          src={'/Card-map.png'}
          alt='img'
          width={40}
          height={40}
        />
      </div>
    </div>
  )
}

export default Contact