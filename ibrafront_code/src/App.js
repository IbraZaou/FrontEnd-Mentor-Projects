import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Client from './pages/Client';
import Entreprise from './pages/Entreprise';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Client />} />
					<Route path="/entreprise" element={<Entreprise />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
