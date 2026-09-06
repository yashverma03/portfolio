import styles from './WorkExperience.module.css';
import dayjs from 'dayjs';
import Decimal from 'decimal.js';

interface Experience {
  title: string;
  company: string;
  startDate: string; // Format: "DD MMM YYYY" (e.g., "01 Apr 2025")
  endDate: string | null; // Format: "DD MMM YYYY" (e.g., "31 Mar 2025") or null for "Present"
  description: string;
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Oats Tech',
    startDate: '01 Apr 2025',
    endDate: null, // Present
    description: `
• Architected secure banking payment systems integrating RBC PAD and PDS with message queue driven asynchronous processing for bulk payments and reconciliation, handling $1B+ in annual transactions
• Built a highly available, event-driven subscription system integrating two payment processors, handling $500K+ in monthly volume with idempotent processing, custom retry logic and early payment options
• Designed and implemented a scalable rewards platform supporting 25+ events, awarding 40M+ points redeemable for gift cards or rent credits, along with monthly Rent Drop campaigns
• Developed an MCP server integrating 50+ internal tools and business data across 3 cross-functional teams, enabling AI-powered natural-language analysis and self-service reporting, reducing reporting time by 85%
• Optimized a fault tolerant ETL data processing pipeline ingesting from 4 sources, reducing processing time from 4 hours to 30 minutes through batch processing

`
  },
  {
    title: 'Junior Software Engineer',
    company: 'Oats Tech',
    startDate: '19 Mar 2024',
    endDate: '31 Mar 2025',
    description: `
• Built a compliant KYC system for remote identity verification with real-time status updates in an Agile development environment, automating tenant onboarding and reducing manual review effort by 56%
• Integrated Stripe’s subscription billing and implemented a tiered access system where users can interact with the AI based on usage limits defined by their subscribed plan, reducing AI overuse incidents by 40%
• Implemented OAuth2-based social logins (Google, Apple, Microsoft, Facebook) and built SSO integration between TenantPay and Equifax, enabling seamless cross-platform access for 5K+ users
• Deployed 4 highly available, scalable services on AWS (EKS, EC2, RDS, S3, IAM), achieving 99.9% uptime
• Automated CI/CD pipelines for containerized applications across two environments, integrating automated build and test workflows, reducing change failure rate by 35% and improving deployment reliability

`
  },
  {
    title: 'Software Engineer Intern',
    company: 'Oats Tech',
    startDate: '18 Sep 2023',
    endDate: '18 Mar 2024',
    description: `
• Engineered a multilingual admin dashboard with a Content Management System (CMS) to manage website content and assets, reducing API latency from 2 seconds to 300 ms by implementing caching
`
  }
];

const WorkExperience = () => {
  // Format date for display (extract "MMM YYYY" from "DD MMM YYYY")
  const formatDateForDisplay = (date: string): string => {
    const parsed = dayjs(date, 'DD MMM YYYY');
    return parsed.format('MMM YYYY');
  };

  // Calculate months difference between two exact dates
  const calculateMonthsDiff = (startDate: string, endDate: string | null): number => {
    const start = dayjs(startDate, 'DD MMM YYYY');
    const end = endDate ? dayjs(endDate, 'DD MMM YYYY') : dayjs();
    // Use exact dates for calculation
    const monthsDiff = end.diff(start, 'month', true); // true for fractional months
    // Round using Decimal.js for precision
    return new Decimal(monthsDiff).toDecimalPlaces(2).toNumber();
  };

  // Format duration: <1 year in months, else in years (with decimals)
  const formatDuration = (months: number): string => {
    const monthsDecimal = new Decimal(months);
    const oneYear = new Decimal(12);
    if (monthsDecimal.lt(oneYear)) {
      // Round months to nearest integer
      const monthsRounded = monthsDecimal.round();
      const monthsInt = monthsRounded.toNumber();
      return `${monthsInt} ${monthsInt === 1 ? 'month' : 'months'}`;
    } else {
      const years = monthsDecimal.dividedBy(oneYear);
      // Round to 1 decimal place
      const yearsRounded = years.toDecimalPlaces(1);
      const yearsValue = yearsRounded.toNumber();
      // If it's a whole number, display without decimal (e.g., "1 year" not "1.0 year")
      if (yearsValue % 1 === 0) {
        const yearsInt = Math.floor(yearsValue);
        return `${yearsInt} ${yearsInt === 1 ? 'year' : 'years'}`;
      } else {
        // Decimal years (e.g., 1.5, 2.3) - always plural
        return `${yearsRounded.toString()} years`;
      }
    }
  };

  // Format date range display
  const formatDateRange = (startDate: string, endDate: string | null): string => {
    const startDisplay = formatDateForDisplay(startDate);
    const endDateDisplay = endDate ? formatDateForDisplay(endDate) : 'Present';
    const months = calculateMonthsDiff(startDate, endDate);
    const duration = formatDuration(months);

    return `${startDisplay} – ${endDateDisplay} (${duration})`;
  };

  const cleanPoint = (point: string) => {
    return point
      .replace(/•/, '') // remove bullet
      .replace(/\.{2,}/g, '.') // replace multiple dots with one
      .trim(); // remove extra spaces
  };

  return (
    <section id='experience' className={styles.root}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.list}>
        {experiences.map((exp, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.header}>
              <h3 className={styles.jobTitle}>
                {exp.title} &middot; {exp.company}
              </h3>
              <span className={styles.date}>{formatDateRange(exp.startDate, exp.endDate)}</span>
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
