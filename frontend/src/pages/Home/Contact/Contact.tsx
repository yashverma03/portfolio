import styles from './Contact.module.css';
import emailIcon from '../../../assets/contact/email.svg';
import whatsappIcon from '../../../assets/contact/whatsapp.svg';

const Contact = () => {
  return (
    <section id='contact' className={styles.root}>
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.contactCards}>
        <div className={styles.contactCard}>
          <img src={emailIcon} alt='Email' className={styles.contactIcon} />
          <div className={styles.contactInfo}>
            <h3 className={styles.contactLabel}>Email</h3>
            <a href='mailto:vermayash2003@gmail.com' className={styles.contactValue}>
              vermayash2003@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.contactCard}>
          <img src={whatsappIcon} alt='WhatsApp' className={styles.contactIcon} />
          <div className={styles.contactInfo}>
            <h3 className={styles.contactLabel}>Phone</h3>
            <a
              href='https://wa.me/918130957794'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.contactValue}
            >
              +91 8130957794
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
