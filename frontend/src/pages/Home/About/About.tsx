import styles from './About.module.css';

const About = () => {
  return (
    <section id='about' className={styles.root}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.gridTwoCol}>
        <p className={styles.muted}>
          Software engineer with experience across payments, authentication, CMS, and real-time
          features. Strong bias for clean architecture, performance, and developer experience.
        </p>
        <p className={styles.muted}>
          Comfortable across the stack: React/TypeScript, Node/Nest, PostgreSQL/MongoDB, AWS. I
          value simple APIs, great DX, and reliable systems.
        </p>
      </div>
    </section>
  );
};

export default About;
