import styled from 'styled-components';
import { useStore } from '../store/Store';
import { Typography } from './UI/Typography';

const TotalStyled = styled.div`
    text-align: center;
    margin: 0 3em;
`;

export const TotalTodos = () => {
  const count = useStore(state => state.todos.length)
    return (
        <TotalStyled>
            <Typography variant='h3'>Total todos: {count}</Typography>
        </TotalStyled>
    );
};
