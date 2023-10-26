import React from 'react'
import { Routes as RoutesWrapper, Navigate, Route } from 'react-router-dom';
import { ROUTE_CONSTANTS } from './constants/route-constants';
import FirstStep from 'src/pages/CreateUser/FirstStep'
import SecondStep from 'src/pages/CreateUser/SecondStep'
import CreateUser from 'src/pages/CreateUser';
import NotFound from 'src/pages/NotFound';

const Routes: React.FC = () => {
    return (
        <RoutesWrapper>
            <Route 
                path={ROUTE_CONSTANTS.ROOT.RELATIVE} 
                element={
                    <Navigate to={ROUTE_CONSTANTS.CREATE_USER_FLOW.FIRST_STEP.ABSOLUTE} replace />
                } 
            />
            <Route path={ROUTE_CONSTANTS.CREATE_USER_FLOW.ROOT.RELATIVE} element={<CreateUser />}>
                <Route path="" element={<Navigate to={ROUTE_CONSTANTS.CREATE_USER_FLOW.FIRST_STEP.RELATIVE} replace/>} />
                <Route path={ROUTE_CONSTANTS.CREATE_USER_FLOW.FIRST_STEP.RELATIVE} element={<FirstStep />} />
                <Route path={ROUTE_CONSTANTS.CREATE_USER_FLOW.SECOND_STEP.RELATIVE} element={<SecondStep />} />
            </Route>
            <Route path={ROUTE_CONSTANTS.ROOT_STAR.RELATIVE} element={<NotFound />}/>
        </RoutesWrapper>
    )
}

export default Routes
