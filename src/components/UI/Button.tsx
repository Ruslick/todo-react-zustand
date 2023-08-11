import React from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../assets/styles/GlobalTheme';

const ButtonStyled = styled.button`
    border: none;
    background-color: ${baseTheme.colors.primary};
    color: ${baseTheme.colors.secondary};
    padding: 0.5em 1.5em;
    margin: 0;
    font-size: 1em;
    border-radius: 1em;
    box-shadow: 0 0 2px ${baseTheme.colors.dark};
    &:hover {
        background-color: ${baseTheme.colors.dark};
        color: ${baseTheme.colors.primary};
        box-shadow: 0 0 2px ${baseTheme.colors.dark};
    }
`;

export const Button = ({ children, onClick }: { children: string, onClick?: VoidFunction  }) => {
    return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};
