import { Global, ThemeProvider } from '@emotion/react';
import styled from "@emotion/styled";

export interface LayoutProps {
    children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {

    return (
        <>
            <Global
                styles={{
                    body: {
                        margin: 0,
                        padding: 0,
                    }
                }}
            />
            <LayoutWrapper>
                {props.children}
            </LayoutWrapper>
        </>
    )
}

export default Layout;

const LayoutWrapper = styled.div<any>(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    padding: 0,
    margin: 0,
    width: '100%',
    minHeight: '100vh',
    overflowY: 'auto',
    zIndex: 1,
    boxSizing: 'border-box',
    transition: 'all 1s linear',
}));