import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../assets/styles/GlobalTheme';

const InputStyled = styled.input`
    text-shadow: 0 0 1px ${baseTheme.colors.dark};
    border: none;
    box-sizing: border-box;
    background-color: ${baseTheme.colors.secondary};
    color: ${baseTheme.colors.primary};
    padding: 0.5em 1.5em;
    margin: 0;
    font-size: 1em;
    border-radius: 1em;
    box-shadow: 0 1px 2px ${baseTheme.colors.dark};
    outline: none;
`;

interface IInput {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange }: IInput) => {
    return <InputStyled  type='text' value={value} onChange={onChange} />;
};
