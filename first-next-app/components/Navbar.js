import React from 'react';
import styles from  '../styles/Navbar.module.css';
import Link from 'next/link';

function Navbar() {
  return (
     <React.Fragment>
         <ul className={styles.navlist}>
           <li><Link href={'/home'}>Home</Link></li>
           <li><Link href={'/about'}>About</Link></li>
           <li><Link href={'/blog'}>Blog</Link></li>
           <li><Link href={'/contact'}>Contact</Link></li>
         </ul>
     </React.Fragment>
  );
}

export default Navbar
