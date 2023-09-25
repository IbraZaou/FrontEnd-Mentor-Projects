import React from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Description from './components/Description';
import Footer from './components/Footer';
import FormTemplate from './components/FormTemplate';
import Slider from './components/Slider';

function App() {
  return (
    <div>
      <Navbar />
      <Description />
      <Project />
      <Slider />
      <FormTemplate />
      <Footer />
    </div>
  );
}

export default App;
