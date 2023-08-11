import styled, { keyframes } from 'styled-components';
import { baseTheme } from '../../assets/styles/GlobalTheme';
import { Typography } from './Typography';

interface ICheckbox {
    checked: boolean;
    onChange?: VoidFunction;
    label: string;
}

const LabelText = styled.div`
    padding-left: 2em;
`;

const CheckboxInput = styled.input`
    height: 0;
    width: 0;
    opacity: 0;
    z-index: -1;
`;

const Label = styled.label`
    position: relative;
    display: flex;
    user-select: none;
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
    width: 1.2em;
    height: 1.2em;
    background: ${baseTheme.colors.secondary};
    position: absolute;
    border: 1px solid ${baseTheme.colors.primary};
    border-radius: 0.3em;

    ${Label}:hover & {
        background: ${baseTheme.colors.primary};
    }

    &::after {
        content: '';
        position: absolute;
        display: none;
    }

    ${CheckboxInput}:checked + &::after {
        display: block;
        left: 0.37em;
        top: 0.05em;
        width: 30%;
        height: 60%;
        border: solid ${baseTheme.colors.primary};
        ${Label}:hover & {
            border: solid ${baseTheme.colors.secondary};
            border-width: 0 0.15em 0.15em 0;
        }
        border-width: 0 0.15em 0.15em 0;
        animation-name: ${rotate};
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
    }
`;

export const Checkbox = ({ checked, onChange, label }: ICheckbox) => {
    return (
        <Label>
            <LabelText>
                <Typography variant='p'>{label}</Typography>
            </LabelText>
            <CheckboxInput type='checkbox' checked={checked} onChange={onChange} />
            <Indicator />
        </Label>
    );
};
