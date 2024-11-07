import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <Link to="/" style={styles.link}>Мій Сайт</Link>
        </div>
        <ul style={styles.navLinks}>
          <li><Link to="/" style={styles.link}>Головна</Link></li>
          <li><Link to="/about" style={styles.link}>Про нас</Link></li>
          <li><Link to="/contact" style={styles.link}>Контакти</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#2c3e50',
    padding: '1rem',
    color: 'white',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '1rem'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease'
  }
};

export default Header;