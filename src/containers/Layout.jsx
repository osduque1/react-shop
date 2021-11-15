import React from 'react';
import Header from '@components/Header';

const Layout = ({ children }) => {//El hijo que trae es el componente Login, se puede ver en App.jsx
	return (
		<div className="Layout">
			<Header />
			{children}
		</div>
	);
}

export default Layout;