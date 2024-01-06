import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Description from './components/Description';
import Footer from './components/Footer';
import FormTemplate from './components/FormTemplate';
import Techno from './components/Techno';

function App() {
  return (
    <div>
      <Navbar />
      <Description />
      <Techno />
      <Project />
      <FormTemplate />
      <Footer />
    </div>
  );
}

export default App;
