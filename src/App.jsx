import React from 'react';
import './App.css';
import './Header.css';
import './MainComponent.css';
import Header from './Header.jsx';
import MainComponent  from './MainComponent.jsx';

function App() {
  return (
    <div className="App">
      <div className='Main--page'>
        <Header />
        <MainComponent />
      </div>
    </div>
  );
}

export default App;
