import styled, { StyleSheetContext } from 'styled-components';
import Header from '../components/Header';

const Body = styled.main`
    padding-top: 70px;
`;

export default function Purpose() {
    return(
        <>
            <Header></Header>
            <Body>
                <p>Ervil LeBaron</p>
            </Body>
        </>
    );
}