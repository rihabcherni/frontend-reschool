import React from 'react';
import {Nav, NavLink, Bars, NavMenu} from './NavbarElements';

const Navbar = () => {
return (
	<div>
	<Nav>
		<Bars />
		<NavMenu>
				<NavLink to='/utilisateurs' >utilisateurs</NavLink>
				<NavLink to='/gestion-poubelle' >gestion-poubelle</NavLink>
				<NavLink to='/transport-dechets'>transport dechet</NavLink>
				<NavLink to='/gestion-dechets' >gestion dechet</NavLink>
				<NavLink to='/pannes' >pannes</NavLink>		
		</NavMenu>
	
	</Nav>
	</div>
);
};

export default Navbar;
