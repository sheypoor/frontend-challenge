import React from 'react'
import { Routes as RoutesWrapper, Navigate, Route, Outlet } from 'react-router-dom';
import { ROUTE_CONSTANTS } from './constants/route-constants';
import FirstStep from '../pages/createUser/FirstStep'
import SecondStep from '../pages/createUser/SecondStep'

const Routes: React.FC = () => {
    return (
        <RoutesWrapper>
            <Route 
                path={ROUTE_CONSTANTS.ROOT.RELATIVE} 
                element={
                    <Navigate to={ROUTE_CONSTANTS.CREATE_USER_FLOW.FIRST_STEP.ABSOLUTE} replace />
                } 
            />
            <Route path={ROUTE_CONSTANTS.CREATE_USER_FLOW.ROOT.RELATIVE} element={<Outlet />}>
                <Route path="" element={<Navigate to={ROUTE_CONSTANTS.CREATE_USER_FLOW.FIRST_STEP.RELATIVE} replace/>} />
                <Route path={ROUTE_CONSTANTS.CREATE_USER_FLOW.FIRST_STEP.RELATIVE} element={<FirstStep />} />
                <Route path={ROUTE_CONSTANTS.CREATE_USER_FLOW.SECOND_STEP.RELATIVE} element={<SecondStep />} />
            </Route>
        </RoutesWrapper>
    )
}

export default Routes
