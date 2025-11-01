import styles from './WorkExperience.module.css';

interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Oats Tech',
    date: 'Apr 2025 – Present (6 months)',
    description: `• Integrated Nuvei’s Merchant Initiated Transactions (MIT) for subscription payments, scheduled 3 business days in advance, with a custom failed-transaction retry logic, reducing payment failures by 15%
• Designed a gamified points and rewards system to incentivize user referrals, payments, subscriptions and enabling gift cards and rent credit redemptions in future payments, increasing monthly active users (MAUs) by 35%
• Optimized a background data processing pipeline by 10 times, enabling efficient ingestion, normalization, and consolidation of payment data from Central 1, Telpay, and Nuvei, and delivering accurate Convera payout files for reconciliation
• Implemented Single Sign-On (SSO) integration allowing TenantPay users to seamlessly access Equifax to view credit scores, reducing the number of steps to access credit data by 40%
• Automated a file synchronization pipeline to seamlessly ingest and sync dashboard uploads from external sources into an AI-context data repository, resulting in a 90% improvement in AI response relevance and accuracy
• Integrated Stripe’s subscription billing and implemented a tiered access system where users can interact with the AI based on usage limits defined by their subscribed plan, reducing AI overuse incidents by 40%
`
  },
  {
    title: 'Junior Software Engineer',
    company: 'Oats Tech',
    date: 'Mar 2024 – Mar 2025 (1 year)',
    description: `• Integrated Trustmatic’s IDV APIs for remote identity verification with real-time status updates, automating tenant approval process and boosting operational efficiency by 56%
• Developed a white-label architecture where each company accesses its own tenant portal with unique branding, improving customer retention by 20% through enhanced personalization
• Implemented OAuth2-based social login, enabling seamless authentication via Google, Apple, Microsoft, and Facebook to enhance user onboarding experience and reduce login friction by 45%
• Engineered an alerting mechanism to track potentially fraudulent landlord transactions using KYC insights and client risk assessment reports, reducing manual review efforts by 63%
• Implemented real-time chat functionality using Socket.io, enabling instant bi-directional communication between car owners and garage owners, improving service coordination by 24%
`
  },
  {
    title: 'Software Engineer Intern',
    company: 'Oats Tech',
    date: 'Sep 2023 – Mar 2024 (6 months)',
    description: `• Engineered a multilingual admin dashboard with a Content Management System (CMS) to manage website content and assets, reducing manual administrative task time by 52%
• Built a customizable kitchen layout configurator that generated real-time design previews and pricing based on user preferences, improving visualization clarity and boosting user engagement by 47%
`
  }
];

const WorkExperience = () => {
  const cleanPoint = (point: string) => {
    return point
      .replace(/^•\s*/, '') // remove leading bullet
      .replace(/\.{2,}/g, '.') // replace multiple dots with one
      .trim(); // remove extra spaces
  };

  return (
    <section id='experience' className={styles.root}>
      <h2 className={styles.title}>Work Experience</h2>
      <div className={styles.list}>
        {experiences.map((exp, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.header}>
              <h3 className={styles.jobTitle}>
                {exp.title} &middot; {exp.company}
              </h3>
              <span className={styles.date}>{exp.date}</span>
            </div>
            <ul className={styles.description}>
              {exp.description
                .split('\n')
                .filter(Boolean)
                .map((point, i) => (
                  <li key={i}>{cleanPoint(`${point}.`)}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
