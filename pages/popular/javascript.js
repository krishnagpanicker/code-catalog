import styled, { StyleSheetContext } from 'styled-components';
import Header from '../../components/Header';

const Body = styled.main`
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Heading = styled.div`
    font-family: 'Barlow', serif;
    font-size: 25px;
    font-weight: 700;
    margin-top: 20px;
`;

const JSBody = styled.div`
    
`;

export default function JavaScript() {
    return (
        <>
            <Header></Header>
            <Body>
                <Heading>JavaScript</Heading>
            </Body>
        </>
    );
}