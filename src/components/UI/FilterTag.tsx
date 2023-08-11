import styled from 'styled-components';
import { baseTheme } from '../../assets/styles/GlobalTheme';

const FilterTagStyled = styled.section`
    font-size: 0.8em;
    background-color: ${baseTheme.colors.dark};
    color: ${baseTheme.colors.secondary};
    width: fit-content;
    padding: 0.3em 1em;
    box-shadow: 0 0 0 0 ${baseTheme.colors.secondary};
    border-radius: 1em;
    cursor: pointer;
    user-select: none;
    &.active {
        background-color: ${baseTheme.colors.light};
        color: ${baseTheme.colors.primary};
        box-shadow: 1px 1px 10px 3px ${baseTheme.colors.dark};
    }
    &:hover:not(.active) {
        transform: scale(1.1);
        transition-duration: 200ms;
    }
`;

interface IFilterTag {
    children: string;
    active?: boolean;
    onClick: VoidFunction;
}

export const FilterTag = ({ onClick, children, active }: IFilterTag) => {
    return (
        <FilterTagStyled onClick={onClick} className={active ? 'active' : ''}>
            {children}
        </FilterTagStyled>
    );
};
