import Image from 'next/image';
import styles from './VitSell.module.scss';


const VitSell = () => {
  return (
    <div className={styles.vit}>
      <div className={styles.vit_slider}>
        <div className={styles.vit_slider_info}>
          <span className={styles.vit_slider_info_text}> ویتسل را همیشه همراه  داشته باشید!</span>  
          <div className={styles.vit_slider_info_download_box}>
            <div className={styles.vit_slider_info_download_two}>
              <div className={styles.vit_slider_info_download_bazar}> 
                <Image
                  src='/Bazar.png'
                  alt='img'
                  width={24}
                  height={24}
                /> 
                <span className={styles.vit_slider_info_bazar_text} >دانلود از بازار</span>
              </div> 
              <div className={styles.vit_slider_info_download_miket}>
                <Image
                  src='/miket.png'
                  alt='img'
                  width={24}
                  height={24}
                /> 
                <span className={styles.vit_slider_info_miket_text} >دانلود از مایکت</span> 
              </div> 
            </div>
            <div className={styles.vit_slider_info_download_right}>
              <Image
                src='/Android.png'
                alt='img'
                width={24}
                height={24}
              />
              <span className={styles.vit_slider_info_right_text} >دانلود مستقیم</span> 
            </div>  
          </div> 
        </div>
        <div className={styles.vit_slider_mobile}>
          <Image
            className={styles.vit_slider_mobile_img}
            src='/mobile-two.png'
            alt='img'
            width={157}
            height={330}
          /> 
        </div>
      </div>
    </div>
  )  
}

export default VitSell