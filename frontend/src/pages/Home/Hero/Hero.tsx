import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import avatar from '../../../assets/home/dp.png';

const Hero = () => {
  return (
    <header id='hero' className={styles.root}>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.muted}>Hi, I'm</p>
          <h1 className='text-4xl md:text-5xl font-bold tracking-tight'>Yash Verma</h1>
          <p className='mt-3 text-lg text-neutral-300'>Software Engineer</p>
          <p className='mt-4 max-w-2xl text-neutral-300'>
            I build robust web apps and platform features with a focus on security, payments, and
            delightful UX. I enjoy shipping high-impact features end-to-end.
          </p>
        </motion.div>
        <div className={styles.avatarWrap}>
          <img src={avatar} alt='Yash Verma portrait' className={styles.avatar} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
