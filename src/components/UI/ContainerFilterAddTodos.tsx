import styled from "styled-components";
import { baseTheme } from "../../assets/styles/GlobalTheme";

export const ContainerFilterAddTodos = styled.div`
display: flex;
flex-direction: column;
gap: 1em;
padding: 1em;
margin: 0 4em;
border: 2px solid ${baseTheme.colors.dark};
border-left: none;
border-right: none;
`;