import React from 'react'
import './styles.css';
import { Footer, Header } from './pages';
import { RouterComponent } from './router/Router';
import { BrowserRouter as Router } from "react-router-dom";


export const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className='container'>
          <RouterComponent />
        </main>
        <Footer />
      </div>
    </Router>
  );
}