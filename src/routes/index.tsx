import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const PersonalInformation = React.lazy(
	() => import('@pages/personal-information/index')
);
const SignUpComplete = React.lazy(
	() => import('@pages/sign-up-complete/index')
);
const Newsletter = React.lazy(() => import('@pages/newsletter/index'));

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
					element={
						<Suspense>
							<PersonalInformation />
						</Suspense>
					}
				/>
				<Route
					path={`/${NEWSLETTER_ADDRESS}/`}
					element={
						<Suspense>
							<Newsletter />
						</Suspense>
					}
				/>
				<Route
					path={`/${COMPLETE_ADDRESS}/`}
					element={
						<Suspense>
							<SignUpComplete />
						</Suspense>
					}
				/>
				<Route
					path='/*'
					element={<Navigate to={`/${PERSONAL_INFORMATION_ADDRESS}`} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default RoutesComponent;
