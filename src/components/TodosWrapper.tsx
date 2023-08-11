import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../assets/styles/GlobalStyles';
import { baseTheme } from '../assets/styles/GlobalTheme';
import { AddTodo } from './AddTodo';
import { Filters } from './Filters';
import { Header } from './Header';
import { Todos } from './Todos';
import { TotalTodos } from './TotalTodos';
import { ContainerFilterAddTodos } from './UI/ContainerFilterAddTodos';

export const TodosWrapper = () => {
    return (
        <ThemeProvider theme={baseTheme}>
            <GlobalStyle />
            <Header />
            <TotalTodos />
            <ContainerFilterAddTodos>
                <Filters />
                <AddTodo />
            </ContainerFilterAddTodos>
            <Todos />
        </ThemeProvider>
    );
};
