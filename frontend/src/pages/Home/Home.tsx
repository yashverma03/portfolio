import { motion } from 'framer-motion';
import s from './Home.module.css';
import Navbar from '../../components/Navbar/Navbar.tsx';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className={s.sectionTitle}>{children}</h2>;
}

export default function Home() {
  return (
    <div className={s.page}>
      <Navbar />
      <header className={s.section}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className={s.muted}>Hi, I'm</p>
          <h1 className='text-4xl md:text-5xl font-bold tracking-tight'>Yash Verma</h1>
          <p className='mt-3 text-lg text-neutral-300'>Software Engineer</p>
          <p className='mt-4 max-w-2xl text-neutral-300'>
            I build robust web apps and platform features with a focus on security, payments, and
            delightful UX. I enjoy shipping high-impact features end-to-end.
          </p>
        </motion.div>
      </header>

      <section className={s.section}>
        <SectionTitle>About</SectionTitle>
        <div className={s.gridTwoCol}>
          <p className={s.muted}>
            Software engineer with experience across payments, authentication, CMS, and real-time
            features. Strong bias for clean architecture, performance, and developer experience.
          </p>
          <p className={s.muted}>
            Comfortable across the stack: React/TypeScript, Node/Nest, PostgreSQL/MongoDB, AWS. I
            value simple APIs, great DX, and reliable systems.
          </p>
        </div>
      </section>

      <section className={s.section}>
        <SectionTitle>Work Experience</SectionTitle>
        <div className={s.list}>
          <div className={s.card}>
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

          <div className={s.card}>
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

          <div className={s.card}>
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

      <section className={s.section}>
        <SectionTitle>Skills</SectionTitle>
        <div className={s.chips}>
          {[
            'React',
            'TypeScript',
            'Node.js',
            'NestJS',
            'PostgreSQL',
            'MongoDB',
            'AWS',
            'Docker',
            'Kubernetes',
            'Redis',
            'Kafka',
            'Tailwind CSS',
            'Jest',
            'Cypress'
          ].map((skill) => (
            <span key={skill} className={s.chip}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className={s.section}>
        <SectionTitle>Projects</SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {[
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
          ].map((p) => (
            <div key={p.name} className={s.card}>
              <h3 className='font-medium'>{p.name}</h3>
              <p className={s.muted}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={s.section}>
        <SectionTitle>Education</SectionTitle>
        <div className={s.card}>
          <p className={s.muted}>B.Tech, NSUT, Delhi (2020–2024)</p>
        </div>
      </section>

      <footer className={s.footer}>
        <p>vermayash2003@gmail.com · Delhi, India</p>
      </footer>
    </div>
  );
}
