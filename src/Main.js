import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Register from './pages/Register/Register'

const Main = () => {
    
    return (
        <>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />            
            <Route component={NotFound} />
        </Switch>
        </>
    )
}

export default Main;