import React from 'react';
import './styles.css';
import backgroundImg from '../../assets/background.png';
import Login from './components/Login';

function Home() {
  return (
    <section>
      <article className="logo-container">
        <img src={backgroundImg} alt="Background da Métrica" />
      </article>
      <Login />
    </section>
  );
}

export default Home;
