import styles from './Recommendations.module.css';

const Recommendations = () => {
  const recommendations = [
    {
      from: 'Manager (Sample)',
      text: 'Yash consistently delivers high-quality features with excellent attention to detail.'
    },
    {
      from: 'Teammate (Sample)',
      text: 'Strong collaborator with a product mindset and great communication.'
    }
  ];

  return (
    <section id='recommendations' className={styles.root}>
      <h2 className={styles.title}>Recommendations</h2>
      <div className={styles.list}>
        {recommendations.map((recommendation) => (
          <div key={recommendation.from} className={styles.card}>
            <p className={styles.muted}>&ldquo;{recommendation.text}&rdquo;</p>
            <p className='mt-2 text-neutral-400 text-sm'>— {recommendation.from}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
