import styles from './WorkExperience.module.css';

const WorkExperience = () => {
  return (
    <section id='experience' className={styles.root}>
      <h2 className={styles.title}>Work Experience</h2>
      <div className={styles.list}>
        <div className={styles.card}>
          <div className='flex items-baseline justify-between gap-3'>
            <h3 className='font-medium'>Software Engineer · Oats Tech</h3>
            <span className='text-sm text-neutral-400'>Apr 2025 – Present</span>
          </div>
          <ul className='mt-2 list-disc pl-5 text-neutral-300 space-y-1'>
            <li>Integrated Nuvei MIT for subscriptions with retry logic; -15% failures.</li>
            <li>Automated file sync pipeline powering AI context; +90% relevance.</li>
            <li>Tiered access with Stripe subscriptions; -40% overuse incidents.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <div className='flex items-baseline justify-between gap-3'>
            <h3 className='font-medium'>Junior Software Engineer · Oats Tech</h3>
            <span className='text-sm text-neutral-400'>Mar 2024 – Mar 2025</span>
          </div>
          <ul className='mt-2 list-disc pl-5 text-neutral-300 space-y-1'>
            <li>IDV integration with webhooks; automated tenant approvals (+56%).</li>
            <li>Multi-factor auth, rate limits, reCAPTCHA; -80% brute-force attacks.</li>
            <li>White-label tenant portals; +20% retention via personalization.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <div className='flex items-baseline justify-between gap-3'>
            <h3 className='font-medium'>Software Engineer Intern · Oats Tech</h3>
            <span className='text-sm text-neutral-400'>Sep 2023 – Mar 2024</span>
          </div>
          <ul className='mt-2 list-disc pl-5 text-neutral-300 space-y-1'>
            <li>Admin CMS for assets/content; -52% manual ops time.</li>
            <li>Kitchen layout configurator with live previews; +47% engagement.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
