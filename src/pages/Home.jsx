import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <h1>Ласкаво просимо на наш сайт</h1>
      <p>Це простий односторінковий додаток, створений за допомогою React.</p>
      <div style={styles.features}>
        <div style={styles.feature}>
          <h2>Особливість 1</h2>
          <p>Ми пропонуємо найкращі послуги для наших клієнтів.</p>
        </div>
        <div style={styles.feature}>
          <h2>Особливість 2</h2>
          <p>Наша команда складається з професійних спеціалістів.</p>
        </div>
        <div style={styles.feature}>
          <h2>Особливість 3</h2>
          <p>Ми гарантуємо високу якість виконання роботи.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  },
  feature: {
    padding: '1.5rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease'
  }
};

export default Home;