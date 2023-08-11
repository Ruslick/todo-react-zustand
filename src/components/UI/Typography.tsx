import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { baseTheme } from '../../assets/styles/GlobalTheme';

interface ITypography {
    variant: 'h1' | 'h3' | 'p';
    children: ReactNode;
    noShadow?: boolean;
}

const fontStyles = css`
    color: ${baseTheme.colors.secondary};
    &.shadow {
        text-shadow: 0 0 5px ${baseTheme.colors.dark};
    }
`;

const P = styled.p`
    ${fontStyles}
    color: ${baseTheme.colors.primary};
    padding: 0;
    margin: 0;

    font-size: 1.2em;

`;
const H1 = styled.h1`
    ${fontStyles}

    font-size: 4em;
`;
const H3 = styled.h1`
    ${fontStyles}

    font-size: 2em;
`;

const variants = {
    p: P,
    h1: H1,
    h3: H3,
};

export const Typography = ({ variant, children, noShadow }: ITypography) => {
    let Text = variants[variant];
    return <Text className={noShadow ? '' : 'shadow'}>{children}</Text>;
};
