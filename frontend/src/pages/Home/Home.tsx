import styles from './Home.module.css';
import Navbar from '../../components/Navbar/Navbar.tsx';
import Hero from './Hero/Hero.tsx';
import WorkExperience from './WorkExperience/WorkExperience.tsx';
import Skills from './Skills/Skills.tsx';
import Projects from './Projects/Projects.tsx';
import Certifications from './Certifications/Certifications.tsx';
import Contact from './Contact/Contact.tsx';
import Education from './Education/Education.tsx';
import Recommendations from './Recommendations/Recommendations.tsx';

const Home = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      <Hero />
      <WorkExperience />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Recommendations />
      <Contact />
    </div>
  );
};

export default Home;
