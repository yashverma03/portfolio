import styles from './Certifications.module.css';

const Certifications = () => {
  const certifications = [
    { name: 'AWS Certified Cloud Practitioner (Sample)', year: '2024' },
    { name: 'Kubernetes (CKAD) (Sample)', year: '2023' }
  ];

  return (
    <section id='certifications' className={styles.root}>
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.list}>
        {certifications.map((certification) => (
          <div key={certification.name} className={styles.item}>
            <div className={styles.header}>
              <span className={styles.name}>{certification.name}</span>
              <span className={styles.year}>{certification.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
