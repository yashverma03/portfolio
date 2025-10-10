import styles from './Skills.module.css';

const Skills = () => {
  const skillNames = [
    'React',
    'TypeScript',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Docker',
    'Kubernetes',
    'Redis',
    'Kafka',
    'Tailwind CSS',
    'Jest',
    'Cypress'
  ];

  return (
    <section id='skills' className={styles.root}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.chips}>
        {skillNames.map((skillName) => (
          <span key={skillName} className={styles.chip}>
            {skillName}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
