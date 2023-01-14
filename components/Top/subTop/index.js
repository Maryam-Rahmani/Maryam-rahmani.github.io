import Slider from './slider';
import Timer from './timer';
import styles from './SubTop.module.scss'

const SubTop = () => {
  return (
    <div className={styles.sub}>
      <Timer />
      <Slider />
    </div>
  )
}

export default SubTop

