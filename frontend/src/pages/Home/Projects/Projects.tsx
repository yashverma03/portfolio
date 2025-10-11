import styles from './Projects.module.css';
import externalLinkIcon from '../../../assets/projects/externalLink.svg';
import githubIcon from '../../../assets/projects/github.svg';

interface Project {
  name: string;
  description: string;
  liveLink: string;
  githubLink: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      name: 'Ecommerce App',
      description:
        'A full-stack e-commerce platform featuring secure payment integration using Stripe API, advanced search and price filtering capabilities and a seamless shopping cart experience.',
      liveLink: 'https://ecommerce-001.onrender.com',
      githubLink: 'https://github.com/yashverma03/ecommerce'
    },
    {
      name: 'Blog App',
      description:
        'A modern blogging platform with user authentication, blog creation and editing, comment system, image upload functionality, category-based filtering, and responsive design for optimal user experience.',
      liveLink: 'https://blog-app-007.onrender.com',
      githubLink: 'https://github.com/yashverma03/blog'
    },
    {
      name: 'Video Streaming App',
      description:
        'A dynamic video streaming application integrated with YouTube API, featuring a custom media player, channel management, real-time views and likes metrics, and personalized content recommendations.',
      liveLink: 'https://video-streaming-app.onrender.com',
      githubLink: 'https://github.com/yashverma03/video-streaming'
    }
  ];

  return (
    <section id='projects' className={styles.root}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsList}>
        {projects.map((project) => (
          <div key={project.name} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <div className={styles.links}>
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.link}
                >
                  <img src={externalLinkIcon} alt='Live Demo' className={styles.linkIcon} />
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.link}
                >
                  <img src={githubIcon} alt='GitHub' className={styles.linkIcon} />
                  GitHub
                </a>
              </div>
            </div>
            <p className={styles.description}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
