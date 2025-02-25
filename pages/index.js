import styled, { StyleSheetContext } from 'styled-components';
import { useState } from 'react';
import Header from '../components/Header';

const Text = styled.h1`
    font-family: 'Inter', sans-serif;
`;

const Body = styled.main`
    padding-top: 70px;
`;

export default function App() {
    return (
        <>
            <Header></Header>
            <Body>
            <Text>Bruh I'm Locked In...</Text>
            </Body>
        </>
    );
}