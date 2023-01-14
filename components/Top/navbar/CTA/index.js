import Link from 'next/link';
import Image from 'next/image';
import styles from './CTA.module.scss';

const CTA = () => {

  return (
    <div className={styles.CTA}>
      <form className={styles.CTA_form} role='search'>
        <input className={styles.CTA_form_input} type='search' placeholder='جستجوی محصولات...' aria-label='Search'/>
        <input className={styles.CTA_form_input_responsive} type='search' placeholder='جستجو...' aria-label='Search'/>
          <Image
            src='/search-normal.png'
            alt='search'
            width={20}
            height={20}
            loading='eager'
          />
      </form>
      <Link href='/' data-scroll>
        <div className={styles.CTA_cart}>
          <Image
            className={styles.CTA_cart_img}
            src='/Card.png'
            alt='Card'
            width={48}
            height={48}
            loading='eager'
          />
        </div>
      </Link>
      <Link href='/' data-scroll>
        <div className={styles.CTA_login}>
          <Image
            src='/login.png'
            alt='Card'
            width={24}
            height={24}
            loading='eager'
          />
        </div>
      </Link>
    
      <Link href='/' data-scroll>
        <button
          className={styles.CTA_button}
          data-scroll
        >
          <span className={styles.CTA_button_in}>
          ورود/ ثبت نام 
          </span>
        </button>
      </Link>
    </div> 
  )
}

export default CTA