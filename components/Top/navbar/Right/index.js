import Link from 'next/link';
import Image from 'next/image';
import styles from './Right.module.scss';

const Right = () => {
  return (
    <div className={styles.right}>
        <Image
          className={styles.menu}
          src={'/menu'}
          alt='img'
          width={24}
          height={24}
        />
       <Link href="/" data-scroll>
          <Image
            src="/Logo.svg"
            alt="logo"
            width={40}
            height={40}
            loading="eager"
            priority={true}
          />
        </Link>
        <Link className={styles.right_link_category} href="/" data-scroll>
          <div className={styles.right_link_category_img}>
            <Image
                src='/category.png'
                alt='category'
                width={20}
                height={20}
                loading='eager'
              />
            <span className={styles.right_link_category_text} href="/" data-scroll>
            دسته بندی ها
            </span>
            <Image
              src='/arrow-down.png'
              alt='arrow'
              width={17.92}
              height={14.58}
              loading='eager'
            />
          </div>
        </Link>
        <Link className={styles.right_link_off} href="/" data-scroll>
          <div className={styles.right_link_off_img}>
            <Image
              src='/ticket-discount.png'
              alt='ticket'
              width={17.92}
              height={14.58}
              loading='eager'
              />
            <span className={styles.right_link_off_text}>
            تخفیف دار ها
            </span>
          </div> 
        </Link>
        <Link className={styles.right_link_sal} href="/" data-scroll>
          <div className={styles.right_link_sal_img}>
            <Image
              src='/Vector.png'
              alt='Vector'
              width={15.89}
              height={20}
              loading='eager'
            />
            <span className={styles.right_link_sal_text}>
            پرفروش ترین ها   
            </span>
          </div>
        </Link>
    </div>
  )
}

export default Right