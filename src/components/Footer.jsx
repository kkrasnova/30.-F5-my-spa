import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <p>&copy; 2024 Мій Сайт. Всі права захищені.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '1.5rem',
    marginTop: 'auto',
    textAlign: 'center'
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    fontSize: '0.9rem'
  }
};

export default Footer;