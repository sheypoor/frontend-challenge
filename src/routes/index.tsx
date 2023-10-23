import React from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function RoutesComponent(): React.ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<div>home</div>} />
				<Route path='/*' element={<Navigate to={'/'} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default RoutesComponent;
