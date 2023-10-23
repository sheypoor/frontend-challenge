import React from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Newsletter, PersonalInformation, SignUpComplete } from '../pages';

export const PERSONAL_INFORMATION_ADDRESS = 'personal-information';

function RoutesComponent(): React.ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Navigate to={`/${PERSONAL_INFORMATION_ADDRESS}`} />}
				/>
				<Route
					path={`/${PERSONAL_INFORMATION_ADDRESS}/`}
					element={<PersonalInformation />}
				/>
				<Route path='/newsletter/' element={<Newsletter />} />
				<Route path='/complete/' element={<SignUpComplete />} />
				<Route
					path='/*'
					element={<Navigate to={`/${PERSONAL_INFORMATION_ADDRESS}`} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default RoutesComponent;
