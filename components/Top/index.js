import Navbar from './navbar/index'
import SubTop from './subTop/index'
import Row from './row/index'
import styles from './Top.module.scss'

const Top = () => {
  return (
    <div className={styles.top}>
      <Navbar />
      <SubTop />
      <Row />
    </div>
  )
}

export default Top