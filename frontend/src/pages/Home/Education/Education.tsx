import styles from './Education.module.css';

const Education = () => {
  return (
    <section id='education' className={styles.root}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.card}>
        <p className={styles.muted}>B.Tech, Netaji Subhas University of Technology (NSUT), Delhi</p>
        <p className={styles.muted}>2024</p>
      </div>
    </section>
  );
};

export default Education;
