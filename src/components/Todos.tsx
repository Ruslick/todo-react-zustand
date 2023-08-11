import styled from 'styled-components';
import { useStore } from '../store/Store';
import { selectFilteredTodos } from '../utils/selectFilteredTodos';
import { Todo } from './Todo';
import { Typography } from './UI/Typography';

const ListStyled = styled.ul`
    display: grid;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    text-align: center;
    grid-template-columns: minmax(200px, 600px);
    padding: 1em 1em 0 1em;
    max-height: 50vh;
    overflow: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Todos = () => {
    const filteredTodos = useStore(selectFilteredTodos);

    return (
        <ListStyled>
            {filteredTodos.length ? (
                filteredTodos.map(el => {
                    return <Todo title={el.title} completed={el.completed} key={el.id} id={el.id} />;
                })
            ) : (
                <Typography variant='h3'>Todos not found</Typography>
            )}
        </ListStyled>
    );
};
