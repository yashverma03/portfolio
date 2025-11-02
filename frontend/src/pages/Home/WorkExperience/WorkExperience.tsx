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
    description: `• Integrated Nuvei’s Merchant Initiated Transactions (MIT) for subscription payments, scheduled 3 business days in advance, with a custom failed-transaction retry logic, processing over $500K+ monthly transactions
• Designed a points and rewards system to incentivize user referrals, payments, subscriptions and enabling gift cards and rent credit redemptions in future payments, increasing monthly active users (MAUs) by 35%
• Optimized a background data processing pipeline, achieving a 10 times reduction in processing time, enabling efficient ingestion, normalization, and consolidation of payment data from Central 1, Telpay, and Nuvei, and delivering accurate Convera payout files for reconciliation
• Automated a file synchronization pipeline to seamlessly ingest and sync dashboard uploads from external sources into an AI-context data repository, resulting in a 90% improvement in AI response relevance
• Integrated Intuit QuickBooks onboarding with OAuth in TenantPay, enabling automated customer and transaction sync, reducing manual accounting workload by 60%
• Integrated Stripe’s subscription billing and implemented a tiered access system where users can interact with the AI based on usage limits defined by their subscribed plan, reducing AI overuse incidents by 40%
• Implemented Single Sign-On (SSO) integration allowing TenantPay users to seamlessly access Equifax to view credit scores, reducing the number of steps to access credit data by 40%

`
  },
  {
    title: 'Junior Software Engineer',
    company: 'Oats Tech',
    startDate: '19 Mar 2024',
    endDate: '31 Mar 2025',
    description: `
    • Integrated Trustmatic’s IDV APIs for remote identity verification with real-time status updates, automating tenant approval process and boosting operational efficiency by 56%
• Developed a white-label architecture where each company accesses its own tenant portal with unique branding, improving customer retention by 20% through enhanced personalization
• Implemented OAuth2-based social login, enabling seamless authentication via Google, Apple, Microsoft, and Facebook to enhance user onboarding experience and reduce login friction by 45%
• Engineered an alerting mechanism to track potentially fraudulent landlord transactions using KYC insights and client risk assessment reports, reducing manual review efforts by 63%
• Implemented real-time chat functionality using Socket.io, enabling instant bi-directional communication between car owners and garage owners, improving service coordination by 24%

`
  },
  {
    title: 'Software Engineer Intern',
    company: 'Oats Tech',
    startDate: '18 Sep 2023',
    endDate: '18 Mar 2024',
    description: `• Engineered a multilingual admin dashboard with a Content Management System (CMS) to manage website content and assets, reducing manual administrative task time by 52%
• Built a customizable kitchen layout configurator that generated real-time design previews and pricing based on user preferences, improving visualization clarity and boosting user engagement by 47%
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
