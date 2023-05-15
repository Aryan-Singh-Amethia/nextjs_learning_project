import React from 'react';
import styles from '../styles/contact2.module.css';

function AddedContact({name,key}) {
  console.log(name,key);
  return (
    <div className={styles.contactRootLayout}>
        <h2 className={styles.contactName}>{name}</h2>
    </div>
  )
}

export default AddedContact
 