import styles from './Skills.module.css';
import reactLogo from '../../../assets/skills/react.svg';
import tailwindCssLogo from '../../../assets/skills/tailwind.svg';
import cypressLogo from '../../../assets/skills/cypress.svg';
import javascriptLogo from '../../../assets/skills/javascript.svg';
import typescriptLogo from '../../../assets/skills/typescript.svg';
import nodeJsLogo from '../../../assets/skills/nodejs.png';
import pythonLogo from '../../../assets/skills/python.svg';
import nestJsLogo from '../../../assets/skills/nestjs.svg';
import expressJsLogo from '../../../assets/skills/expressjs.png';
import redisLogo from '../../../assets/skills/redis.svg';
import kafkaLogo from '../../../assets/skills/kafka.svg';
import cPlusPlusLogo from '../../../assets/skills/cpp.svg';
import jestLogo from '../../../assets/skills/jest.svg';
import postgresqlLogo from '../../../assets/skills/postgresql.svg';
import mySqlLogo from '../../../assets/skills/mysql.svg';
import mongoDbLogo from '../../../assets/skills/mongodb.svg';
import linuxLogo from '../../../assets/skills/linux.svg';
import gitLogo from '../../../assets/skills/git.svg';
import awsLogo from '../../../assets/skills/aws.svg';
import dockerLogo from '../../../assets/skills/docker.svg';
import kubernetesLogo from '../../../assets/skills/kubernetes.svg';

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
      name: 'Backend',
      skills: [
        { name: 'JavaScript', logo: javascriptLogo },
        { name: 'TypeScript', logo: typescriptLogo },
        { name: 'Node.js', logo: nodeJsLogo },
        { name: 'Python', logo: pythonLogo },
        { name: 'NestJS', logo: nestJsLogo },
        { name: 'Express.js', logo: expressJsLogo },
        { name: 'Redis', logo: redisLogo },
        { name: 'Kafka', logo: kafkaLogo },
        { name: 'C++', logo: cPlusPlusLogo },
        { name: 'Jest', logo: jestLogo }
      ]
    },
    {
      name: 'Database',
      skills: [
        { name: 'PostgreSQL', logo: postgresqlLogo },
        { name: 'MySQL', logo: mySqlLogo },
        { name: 'MongoDB', logo: mongoDbLogo }
      ]
    },
    {
      name: 'DevOps',
      skills: [
        { name: 'Linux', logo: linuxLogo },
        { name: 'Git', logo: gitLogo },
        { name: 'AWS', logo: awsLogo },
        { name: 'Docker', logo: dockerLogo },
        { name: 'Kubernetes', logo: kubernetesLogo }
      ]
    },
    {
      name: 'Frontend',
      skills: [
        { name: 'React.js', logo: reactLogo },
        { name: 'Tailwind CSS', logo: tailwindCssLogo },
        { name: 'Cypress', logo: cypressLogo }
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
