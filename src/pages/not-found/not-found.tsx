import styled from "@emotion/styled";
import { BsEmojiDizzy } from "react-icons/bs"

const NotFound = () => {
    return (
        <NotFoundWrapper>
            <BsEmojiDizzy size='160px' />
            <Title>No Match Found</Title>
        </NotFoundWrapper>
    )
}

export default NotFound

const NotFoundWrapper = styled.div(() => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'max-content',
    padding: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
}))

const Title = styled.h1(() => ({
    color: 'red',
    fontWeight: 900,
    fontSize: '75px',
    textTransform: 'capitalize',
}))