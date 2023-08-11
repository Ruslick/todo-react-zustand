import styled from 'styled-components';
import { Typography } from './UI/Typography';


const Container = styled.div`
  text-align: center;

`

export const Header = () => {
    return (
        <Container>
            <Typography variant='h1'>TODO</Typography>
        </Container>
    );
};
