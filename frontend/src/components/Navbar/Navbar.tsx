import s from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={s.root}>
      <div className={s.bar}>
        <div className={s.brand}>YV</div>
        <nav className={s.links}>
          {['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((t) => (
            <a key={t} href={`#${t.toLowerCase()}`} className={s.link}>
              {t}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
