import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { baseTheme } from '../assets/styles/GlobalTheme';
import { useStore } from '../store/Store';
import { ITodo } from '../store/TypesStore';
import { Button } from './UI/Button';
import { Checkbox } from './UI/Checkbox';
import { Input } from './UI/Input';

const TodoWrapper = styled.li`
    display: flex;
    flex-direction: column;
    padding-bottom: 0.2em;
    border-bottom: 2px solid ${baseTheme.colors.dark};
    text-align: start;
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 1em;
    padding-top: 1em;
    align-self: end;
`;

export const Todo = ({ title, completed, id }: ITodo) => {
    const { switchCompleted, deleteTodo } = useStore();
    const patchTodo = useStore(state => state.patchTodo);
    const [isEdited, setIsEdited] = useState(false);
    const [inputValue, setInputValue] = useState(title);

    const saveHandle = () => {
        patchTodo(id, inputValue);
        setIsEdited(false);
    };

    const clickEditHandle = () => {
        setIsEdited(true);
    };

    const closeEditHandle = () => {
        setIsEdited(false);
    };

    const deleteHandle = () => {
        deleteTodo(id);
    };

    const changeInputHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <TodoWrapper>
            {isEdited || <Checkbox checked={completed} onChange={() => switchCompleted(id)} label={title} />}
            {!isEdited || <Input value={inputValue} onChange={changeInputHandle} />}
            {isEdited || (
                <ButtonWrapper>
                    <Button onClick={clickEditHandle}>EDIT</Button>
                    <Button onClick={deleteHandle}>DELETE</Button>
                </ButtonWrapper>
            )}
            {!isEdited || (
                <ButtonWrapper>
                    <Button onClick={saveHandle}>SAVE</Button>
                    <Button onClick={closeEditHandle}>CANCEL</Button>
                </ButtonWrapper>
            )}
        </TodoWrapper>
    );
};
