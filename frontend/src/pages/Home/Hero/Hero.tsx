import styles from './Hero.module.css';
import linkedinIcon from '../../../assets/hero/linkedin.svg';
import googleDriveIcon from '../../../assets/hero/googleDrive.svg';
import githubIcon from '../../../assets/hero/github.svg';
import { trackClick } from '../../../utils/analytics';

const Hero = () => {
  return (
    <header id='hero' className={styles.root}>
      <div className={styles.content}>
        <div>
          <p className={styles.muted}>Hi, I'm</p>
          <h1 className={styles.title}>Yash Verma</h1>
          <p className={styles.subtitle}>Software Engineer</p>
          <p className={styles.location}>Delhi, India</p>
          <p className={styles.description}>
            I am a Software Engineer at Oats Tech with 2.5 years of experience specializing in full
            stack development, building scalable cloud-native SaaS platforms and high-volume payment
            systems. I build robust full stack systems with a focus on performance, security, and
            reliability.
          </p>
          <div className={styles.ctaButtons}>
            <a
              href='https://www.linkedin.com/in/yashverma2003'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.ctaButton}
              onClick={() => trackClick('linkedin')}
            >
              <img src={linkedinIcon} alt='LinkedIn' className={styles.ctaIcon} />
              LinkedIn
            </a>
            <a
              href='https://drive.google.com/file/d/1_52R52MmukcObe3ZaWhOmkq3tUAA7hVi'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.ctaButton}
              onClick={() => trackClick('resume')}
            >
              <img src={googleDriveIcon} alt='Resume' className={styles.ctaIcon} />
              Resume
            </a>
            <a
              href='https://github.com/yashverma03'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.ctaButton}
              onClick={() => trackClick('github')}
            >
              <img src={githubIcon} alt='GitHub' className={styles.ctaIcon} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
