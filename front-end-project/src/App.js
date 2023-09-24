import React from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Description from './components/Description';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Description />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
