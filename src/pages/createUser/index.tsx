import React from 'react'
import { Outlet } from 'react-router-dom'
import CreateUserProvider from './context'

const CreateUser: React.FC = () => {
    return (
        <CreateUserProvider>
            <Outlet />
        </CreateUserProvider>
    )
}

export default CreateUser