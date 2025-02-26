import styled, { StyleSheetContext } from 'styled-components';

const P = styled.p`
    font-family: 'Barlow', serif;
    font-size: 15px;
    font-weight: 300;
    padding-bottom: 40px;
`;

const H = styled.h1`
    font-family: 'Barlow', serif;
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 10px;
`;

const HO = styled.div`
    font-family: 'Barlow', serif;
    font-size: 25px;
    font-weight: 700;
    margin-top: 20px;
    padding: 20px;
    align-self: center;
`;

export function Head({ children }) {
    return (
        <H>{ children }</H>
    );
}

export function Para({ children }) {
    return (
        <P>{ children }</P>
    );
}

export function Heading({ children }) {
    return(
        <HO>{ children }</HO>
    );
}