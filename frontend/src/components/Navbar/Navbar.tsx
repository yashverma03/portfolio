import { useState } from 'react';
import styles from './Navbar.module.css';
import ClickAwayListener from 'react-click-away-listener';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={closeNavbar}>
      <div className={styles.root}>
        <div className={styles.bar}>
          <a href='#hero' className={styles.brand} onClick={closeNavbar}>
            YV
          </a>
          <button
            aria-label='Toggle menu'
            className={styles.menuBtn}
            onClick={() => setIsOpen((v) => !v)}
          >
            ☰
          </button>
          <nav className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={styles.link} onClick={closeNavbar}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default Navbar;
