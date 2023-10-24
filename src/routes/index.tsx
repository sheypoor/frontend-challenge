import React from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Newsletter, PersonalInformation, SignUpComplete } from '../pages';

export const PERSONAL_INFORMATION_ADDRESS = 'personal-information';
export const NEWSLETTER_ADDRESS = 'newsletter';
export const COMPLETE_ADDRESS = 'complete';

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
				<Route path={`/${NEWSLETTER_ADDRESS}/`} element={<Newsletter />} />
				<Route path={`/${COMPLETE_ADDRESS}/`} element={<SignUpComplete />} />
				<Route
					path='/*'
					element={<Navigate to={`/${PERSONAL_INFORMATION_ADDRESS}`} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default RoutesComponent;
