import React from 'react'
import styles from './CreateUser.module.scss'
import { Outlet } from 'react-router-dom'
import CreateUserProvider from './context'

const CreateUser: React.FC = () => {
    return (
        <CreateUserProvider>
            <div className={styles.container}>
                <h4>Create Your Account</h4>
                <Outlet />
            </div>
        </CreateUserProvider>
    )
}

export default CreateUser