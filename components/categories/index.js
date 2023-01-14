import Image from 'next/image';
import Cat from '../products/cat/index'
import styles from './Categories.module.scss';


const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.categories_slider}>
        <div className={styles.categories_title}>
          <div className={styles.categories_title_label}>
            <div className={styles.categories_title_icon}>
              <Image
                className={styles.categories_img_left}
                src='/category-red.png'
                alt='img'
                width={24}
                height={24}
              />
            </div>
            <span className={styles.categories_title_label_text}>دسته بندی های محبوب</span>
            <div className={styles.categories_title_label_vector}></div>
          </div>
        </div>
        <div className={styles.categories_slider_bottom}>
          <div className={styles.categories_slider_bottom_up}>
          <div  className={styles.res_row1}>
            <Image
              className={styles.cat_img}
              src='/mod.png'
              alt='img'
              width={98}
              height={98}
            />
            <span className={styles.cat_text}>مد و پوشاک</span>      
          </div>
          <div  className={styles.res_row1}>
            <Image
              className={styles.cat_img}
              src='/mobile.png'
              alt='img'
              width={98}
              height={98}
            />
            <span className={styles.cat_text}>موبایل</span>      
          </div>
          <div  className={styles.res_row1}>
            <Image
              className={styles.cat_img}
              src='/digital.png'
              alt='img'
              width={98}
              height={98}
            />
            <span className={styles.cat_text}>کالای دیجیتال</span>      
          </div>
          <div  className={styles.res_row1_tahrir}>
            <Image
              className={styles.cat_img}

              src='/tahrir.png'
              alt='img'
              width={98}
              height={98}
            />
            <span className={styles.cat_text}>لوازم تحریر</span>      
          </div>
          <div  className={styles.res_row1_taghizat}>
            <Image
              className={styles.cat_img}
              src='/taghizat.png'
              alt='img'
              width={98}
              height={98}
            />
            <span className={styles.cat_text}>تجهیزات صنعتی</span>      
          </div>
          </div>
          <div className={styles.categories_slider_bottom_down}>
          <div  className={styles.res_row1}>
            <Image
              className={styles.cat_img}
              src='/ashpazkhane.png'
              alt='img'
              width={98}
              height={98}
            />
            <span className={styles.cat_text}>خانه و آشپزخانه</span>      
          </div>
          <div  className={styles.res_row1_ziba}>
            <Image
              className={styles.cat_img}
              src='/zibaie.png'
              alt='img'
              width={98}
              height={98}
            />
            <span className={styles.cat_text}>زیبایی و سلامت</span>      
          </div>
          <div  className={styles.res_row1}>
            <Image
              className={styles.cat_img}
              src='/asbab-bazi.png'
              alt='img'
              width={98}
              height={98}
            />
            <span className={styles.cat_text}>اسباب بازی</span>      
          </div>
          <div  className={styles.res_row1}>
            <Image
              className={styles.cat_img}
              src='/super-market.png'
              alt='img'
              width={98}
              height={98}
            />
            <span className={styles.cat_text}>سوپرمارکت</span>      
          </div>
            <Image
              className={styles.categories_img}
              src='/wihte.png'
              alt='img'
              width={98}
              height={98}
            />
          </div>
        </div>
        <div className={styles.categories_slider_bottom_res}>
          <div  className={styles.res_row1}>
            <Image
              className={styles.cat_img}
              src='/taghizat.png'
              alt='img'
              width={98}
              height={98}
            />
            <span className={styles.cat_text}>تجهیزات صنعتی</span>      
          </div>
          <div  className={styles.res_row1}>
            <Image
              className={styles.cat_img}
              src='/asbab-bazi.png'
              alt='img'
              width={98}
              height={98}
            />
            <span className={styles.cat_text}>اسباب بازی</span>      
          </div>
          <div  className={styles.res_row1}>
            <Image
              className={styles.cat_img}
              src='/zibaie.png'
              alt='img'
              width={98}
              height={98}
            />
            <span className={styles.cat_text}>زیبایی و سلامت</span>      
          </div>
        </div>
      </div>
      <Image
        className={styles.categories_img_left}
        src='/cart-photo.png'
        alt='img'
        width={399}
        height={368}
      />
    </div>
  )  
}

export default Categories