import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      {/* Головний заголовок */}
      <h1>Про нашу компанію</h1>

      {/* 1. Секція про місію */}
      <section style={styles.section}>
        <h2>Наша місія</h2>
        <p style={styles.text}>
          Ми прагнемо створювати інноваційні веб-рішення, які допомагають 
          нашим клієнтам досягати успіху в цифровому світі. Наша мета - 
          забезпечити найвищу якість послуг та задоволення потреб кожного клієнта.
        </p>
      </section>

      {/* 2. Секція про компанію */}
      <section style={styles.section}>
        <h2>Про компанію</h2>
        <p style={styles.text}>
          Наша компанія була заснована в 2024 році групою ентузіастів, 
          які вірять у силу сучасних технологій. За цей час ми успішно 
          реалізували десятки проектів та здобули довіру наших клієнтів.
        </p>
        <div style={styles.highlights}>
          <div style={styles.highlight}>
            <h3>5+</h3>
            <p>Років досвіду</p>
          </div>
          <div style={styles.highlight}>
            <h3>100+</h3>
            <p>Проектів</p>
          </div>
          <div style={styles.highlight}>
            <h3>50+</h3>
            <p>Клієнтів</p>
          </div>
        </div>
      </section>

      {/* 3. Секція про команду */}
      <section style={styles.section}>
        <h2>Наша команда</h2>
        <div style={styles.team}>
          <div style={styles.teamMember}>
            <div style={styles.memberPhoto}>👨‍💼</div>
            <h3>Іван Петренко</h3>
            <p>Генеральний директор</p>
            <p style={styles.memberDesc}>
              10+ років досвіду в IT-індустрії
            </p>
          </div>

          <div style={styles.teamMember}>
            <div style={styles.memberPhoto}>👩‍💼</div>
            <h3>Марія Коваленко</h3>
            <p>Технічний директор</p>
            <p style={styles.memberDesc}>
              Експерт з веб-розробки
            </p>
          </div>

          <div style={styles.teamMember}>
            <div style={styles.memberPhoto}>👨‍💻</div>
            <h3>Олександр Сидоренко</h3>
            <p>Провідний розробник</p>
            <p style={styles.memberDesc}>
              Спеціаліст з React
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Стилі компонента
const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  section: {
    marginBottom: '4rem'
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#666'
  },
  highlights: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  },
  highlight: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  team: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  },
  teamMember: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease'
  },
  memberPhoto: {
    fontSize: '4rem',
    marginBottom: '1rem'
  },
  memberDesc: {
    color: '#666',
    fontSize: '0.9rem',
    marginTop: '0.5rem'
  }
};

export default About;