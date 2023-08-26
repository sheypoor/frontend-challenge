import styled from "@emotion/styled";
import Button from "../../components/form/elements/button";
import { Store } from "../../models/store";
import useStore from "../../state-management/store";
import { Toaster } from "../../components/notices/toaster";

const Home = () => {

    const logout: () => void = useStore<() => void>((store: Store) => store.logout)

    return (
        <HomeWrapper>
            <Title>home</Title>
            <Info>Hello dear</Info>
            <Info>
                According to the e-mail received and based on the explanations in the e-mail, the current task has been completed and you can test the project.
            </Info>
            <ButtonWrapper>
                <Button
                    title='logout'
                    disable={false}
                    onClick={() => {
                        Toaster.success(
                            'You logged out successfully',
                            { toastId: 'valid-data' }
                        )
                        logout()
                    }}
                />
            </ButtonWrapper>
        </HomeWrapper>
    )
}

export default Home

const HomeWrapper = styled.div(() => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px',
}));

const Title = styled.h1(() => ({
    fontWeight: 900,
    fontSize: '35px',
    textTransform: 'capitalize',
}));

const Info = styled.p(() => ({
    width: '50%',
    fontWeight: 500,
    fontSize: '18px',
    transition: 'all 2s linear',
}));

const ButtonWrapper = styled.div(() => ({
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '15px',
}))