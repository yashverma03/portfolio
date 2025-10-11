import styles from './Skills.module.css';

interface Skill {
  name: string;
  logo: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React.js', logo: '/src/assets/skills/react.svg' },
        { name: 'Tailwind CSS', logo: '/src/assets/skills/tailwind.svg' },
        { name: 'Cypress', logo: '/src/assets/skills/cypress.svg' }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'JavaScript', logo: '/src/assets/skills/javascript.svg' },
        { name: 'TypeScript', logo: '/src/assets/skills/typescript.svg' },
        { name: 'Node.js', logo: '/src/assets/skills/nodejs.png' },
        { name: 'Nest.js', logo: '/src/assets/skills/nestjs.svg' },
        { name: 'Express.js', logo: '/src/assets/skills/expressjs.png' },
        { name: 'Redis', logo: '/src/assets/skills/redis.svg' },
        { name: 'Kafka', logo: '/src/assets/skills/kafka.svg' },
        { name: 'C++', logo: '/src/assets/skills/cpp.svg' },
        { name: 'Jest', logo: '/src/assets/skills/jest.svg' }
      ]
    },
    {
      name: 'Database',
      skills: [
        { name: 'PostgreSQL', logo: '/src/assets/skills/postgresql.svg' },
        { name: 'MySQL', logo: '/src/assets/skills/mysql.svg' },
        { name: 'MongoDB', logo: '/src/assets/skills/mongodb.svg' }
      ]
    },
    {
      name: 'DevOps',
      skills: [
        { name: 'Linux', logo: '/src/assets/skills/linux.svg' },
        { name: 'Git', logo: '/src/assets/skills/git.svg' },
        { name: 'AWS', logo: '/src/assets/skills/aws.svg' },
        { name: 'Docker', logo: '/src/assets/skills/docker.svg' },
        { name: 'Kubernetes', logo: '/src/assets/skills/kubernetes.svg' }
      ]
    }
  ];

  return (
    <section id='skills' className={styles.root}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.categories}>
        {skillCategories.map((category) => (
          <div key={category.name} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.name}</h3>
            <div className={styles.chips}>
              {category.skills.map((skill) => (
                <div key={skill.name} className={styles.chip}>
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className={styles.logo}
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
