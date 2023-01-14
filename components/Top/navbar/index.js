import Link from "next/link";
import Image from "next/image";
import CTA from '../navbar/CTA/index'
import Right from "./Right";
import styles from './Navbar.module.scss'

const Navbar = () => {

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <Right/>
      <CTA/>
    </nav>
  )
}

export default Navbar;