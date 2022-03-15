import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GestionDechet from './tables/pages/GestionDechet'
import GestionPoubelle from './tables/pages/GestionoPoubelle'
import PageTransportDechet from './tables/pages/TransportDechet';
import Pannes from './tables/pages/Pannes';
import Users from './tables/pages/Users'
function App() {
return (
	<div>
	   <Router>
			<Navbar />
			<Routes>
				<Route exact path='/utilisateurs' element={<Users/>}></Route>										
				<Route exact path='/gestion-poubelle' element={<GestionPoubelle/>}></Route>				
				<Route exact path='/transport-dechets' element={<PageTransportDechet/>}></Route>				
			    <Route exact path='/gestion-dechets' element={<GestionDechet/>}></Route>
				<Route exact path='/pannes' element={<Pannes/>}></Route>							
			</Routes>
	   </Router>
		
	</div>

);
}

export default App;


