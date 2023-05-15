import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/contact.module.css';
import AddedContact from '../components/Contact';

function contact() {

  let [contactList,setContactList] = useState([]);

  const contactNameRef = useRef();

  const onSubmitHandler = (event) =>{
     event.preventDefault();
     console.log('Newly Entered Contact :: ',contactNameRef.current.value);
     setContactList([...contactList,contactNameRef.current.value])
     document.getElementById('name').value='';
  };

  return (
    <React.Fragment>
      <Navbar/>
      <div style={{display:'flex',justifyContent:'center'}}>
      <div className={styles.contactRootLayout}>
      <h1 className={styles.contactHeader}>Contact</h1>
      </div>
      </div>
      <div className={styles.contactFormLayout}>
      <form className={styles.contactForm} onSubmit={onSubmitHandler}>
        <label htmlFor='name' className={styles.inputLabel}>Enter Contact Name</label>
        <input type='text' id='name' ref={contactNameRef}/>
        <button type='submit'>Add</button>
      </form>
      </div>
      {contactList.length>0 && <div className={styles.addedContactsRoot}>
      <div className={styles.addedContacts}>
         {contactList.map((contactName,idx)=><AddedContact name={contactName} key={idx}/>)}
      </div>
      </div>}
    </React.Fragment>
  )
}

 export default contact
