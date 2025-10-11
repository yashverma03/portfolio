import styles from './WorkExperience.module.css';

interface Experience {
  title: string;
  company: string;
  date: string;
  points: string;
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Oats Tech',
    date: 'Apr 2025 – Present',
    points: `• Integrated Nuvei’s Merchant Initiated Transactions (MIT) for subscription payments, scheduled 3 business days in advance, with a custom failed-transaction retry logic, reducing payment failures by 15%
• Automated a file synchronization pipeline where dashboard file uploads are stored and synced to an AI-context data source, leading to a 90% improvement in AI response relevance
• Integrated Stripe’s subscription billing and implemented a tiered access system where users can interact with the AI based on usage limits defined by their subscribed plan, reducing AI overuse incidents by 40%`
  },
  {
    title: 'Junior Software Engineer',
    company: 'Oats Tech',
    date: 'Mar 2024 – Mar 2025',
    points: `• Integrated Trustmatic’s IDV APIs for remote identity verification and developed webhook listeners for real-time status updates, automating tenant approval process and boosting operational efficiency by 56%
• Developed a strong security system for tenants and managers, featuring multi-factor authentication (MFA) via SMS and email using secure HTTPS-only cookies, login retry restrictions, API rate limiting, and Google reCAPTCHA — resulting in a 80% reduction in brute-force attacks
• Developed a white-label architecture where each company accesses its own tenant portal with unique branding, improving customer retention by 20% through enhanced personalization
• Implemented OAuth2-based social login, enabling seamless authentication via Google, Apple, Microsoft, and Facebook to enhance user onboarding experience and reduce login friction by 45%
• Engineered an alerting mechanism to track potentially fraudulent landlord transactions using KYC insights and client risk assessment reports, reducing manual review efforts by 63%
• Implemented real-time chat functionality using Socket.io, enabling instant bi-directional communication between car owners and garage owners, improving service coordination by 24%
• Implemented a garage owner search page with Google Maps integration to visually display garage locations, enhancing user experience and improving search discoverability by 40%
• Created a 3D mapping solution using Mapbox GL and added geocoding API to enable location-based search functionality, enabling users to explore 8,000+ business locations across Canada
• Built a multilingual home services booking flow with dynamic, service-specific questionnaires and real-time price calculation based on user inputs, streamlining contractor selection and boosting conversion rates by 12%
• Implemented debouncing on Google Places API requests to minimize redundant calls, reducing API usage by 70%`
  },
  {
    title: 'Software Engineer Intern',
    company: 'Oats Tech',
    date: 'Sep 2023 – Mar 2024',
    points: `• Engineered an admin dashboard with a  Content Management System (CMS) to manage website content and assets, reducing manual administrative task time by 52%
• Built a customizable kitchen layout configurator that generated real-time design previews and pricing based on user preferences, improving visualization clarity and boosting user engagement by 47%
• Optimized API efficiency using TanStack Query's caching mechanism, cutting down redundant network requests and achieving a 15% reduction in AWS EC2 costs
• Optimized performance using lazy loading techniques and reducing initial page load time by up to 27%`
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
              {exp.points
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
