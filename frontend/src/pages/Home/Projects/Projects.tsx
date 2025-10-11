import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      name: 'Ecommerce app',
      desc: 'Payments via Stripe, search and pricing filters, cart and checkout experience.'
    },
    {
      name: 'Blog app',
      desc: 'Blogging with comments, image uploads, category filters, authentication.'
    },
    {
      name: 'Video Streaming app',
      desc: 'Media player with YouTube API, channel views/likes metrics.'
    }
  ];

  return (
    <section id='projects' className={styles.root}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.table}>
        {projects.map((project) => (
          <div key={project.name} className={styles.card}>
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.muted}>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
