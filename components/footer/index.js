import Image from 'next/image';
import Contact from './contact/index';
import Permit from './permit/index';
import styles from './Footer.module.scss';


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_logo}>
        <Image
          src={'/Logo.svg'}
          alt='img'
          width={112}
          height={112}
        />
       <span className={styles.footer_logo_title}>ویتسل</span>
        <span className={styles.footer_logo_text}>
        صرافی هفت ارز پلتفرم ایمن و سریع برای انجام معاملات ارز دیجیتال در بستری مطمئن
        </span>
      </div>
      
      <div className={styles.footer_product_vit}>
      <div className={styles.footer_vit}>
          <span className={styles.footer_product_title}>با ویتسل</span>
          <span className={styles.footer_product_text}>درباره ما</span>
          <span className={styles.footer_product_text}>تماس با ما</span>
          <span className={styles.footer_product_text}>حریم خصوصی</span>
          <span className={styles.footer_product_text}>شرایط بازگشت کالا</span>
        </div>
        <div className={styles.footer_product}>
          <span className={styles.footer_product_title}>ارتباط با ویتسل</span>
          <span className={styles.footer_product_text}>کالای دیجیتال</span>
          <span className={styles.footer_product_text}>سوپرمارکت</span>
          <span className={styles.footer_product_text}>گوشی موبایل</span>
          <span className={styles.footer_product_text}>ابزار الات</span>
          <span className={styles.footer_product_text}>لوازم تحریر</span>
        </div>
      </div>
      <Contact />
      <Permit />
      <div className={styles.footer_line}>
      </div>
      <div className={styles.footer_text}>
      کلیه حقوق متعلق به شرکت ویستا است. 
      </div>
    </div>
  )  
}

export default Footer