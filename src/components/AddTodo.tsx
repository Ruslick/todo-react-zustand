import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { useStore } from '../store/Store';
import { Button } from './UI/Button';
import { Input } from './UI/Input';

const Form = styled.form`
    display: flex;
    justify-content: center;
    gap: 1em;
`;

export const AddTodo = () => {
    const { addTodo } = useStore();
    const [inputValue, setInputValue] = useState('');

    const submitHandle = (e: FormEvent) => {
        e.preventDefault();
        addTodo(inputValue);
        setInputValue("")
    };

    const inputChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <Form onSubmit={submitHandle}>
            <Input value={inputValue} onChange={inputChangeHandle} />
            <Button>ADD</Button>
        </Form>
    );
};
