import awsLogo from '../../../assets/certifications/cloudPractitioner.png';
import externalLinkIcon from '../../../assets/projects/externalLink.svg';
import styles from './Certifications.module.css';

const Certifications = () => {
  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      logo: awsLogo,
      link: 'https://www.credly.com/badges/dd17cbec-5638-40f9-bd2a-7953c45507d8/public_url'
    }
  ];

  return (
    <section id='certifications' className={styles.root}>
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.list}>
        {certifications.map((certification) => (
          <div key={certification.name} className={styles.item}>
            {certification.logo && (
              <img src={certification.logo} alt={certification.name} className={styles.logo} />
            )}
            <div className={styles.content}>
              <span className={styles.name}>{certification.name}</span>
            </div>
            <a
              href={certification.link}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              <img src={externalLinkIcon} alt='View Credential' className={styles.linkIcon} />
              View Credential
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
