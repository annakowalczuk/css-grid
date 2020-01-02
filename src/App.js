import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          CSS Grid based on Kirsty Burgoine presentation at Frontend Connect
        </p>
      </header>
      <section>
        <div className="grid__container">
          <div className="grid__item"></div>
          <div className="grid__item"></div>
          <div className="grid__item"></div>
          <div className="grid__item"></div>
          <div className="grid__item"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
