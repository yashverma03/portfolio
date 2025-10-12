import { motion } from 'framer-motion';
import styles from './Home.module.css';
import Navbar from '../../components/Navbar/Navbar.tsx';
import Hero from './Hero/Hero.tsx';
import WorkExperience from './WorkExperience/WorkExperience.tsx';
import Skills from './Skills/Skills.tsx';
import Projects from './Projects/Projects.tsx';
import Contact from './Contact/Contact.tsx';
import Education from './Education/Education.tsx';

const animationProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: {
    once: true,
    amount: 0.1
  },
  variants: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }
};

const Home = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      <motion.div {...animationProps}>
        <Hero />
      </motion.div>
      <motion.div {...animationProps}>
        <WorkExperience />
      </motion.div>
      <motion.div {...animationProps}>
        <Skills />
      </motion.div>
      <motion.div {...animationProps}>
        <Projects />
      </motion.div>
      <motion.div {...animationProps}>
        <Education />
      </motion.div>
      <motion.div {...animationProps}>
        <Contact />
      </motion.div>
    </div>
  );
};

export default Home;
