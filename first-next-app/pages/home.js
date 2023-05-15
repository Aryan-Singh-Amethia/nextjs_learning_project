import React from 'react';
import styles from '../styles/home.module.css';
import Image from 'next/image';
import Navbar from '../components/Navbar';

function home() {
  return (
    <React.Fragment>
    <div className={styles.homeBody}>
    <div className={styles.pageTitle}>
        <h1>Hunting Coder</h1>
        <section>A Blog for coders made by coder</section>
    </div>
    <div className={styles.headImage}>
    <Image src='/home-image.jpg'
           width={400}
           height={500}
           alt=''
           className={styles.imageBanner}/>
    </div>
    </div>
    </React.Fragment>
  )
}

export default home