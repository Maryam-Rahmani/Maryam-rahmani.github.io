import Link from 'next/link';
import Image from 'next/image';
import styles from './DropDown.module.scss';

const DropDown = () => {
  return (
    <div className={`nav-item dropdown ${styles.dropDown}`}>
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  )
}

export default DropDown