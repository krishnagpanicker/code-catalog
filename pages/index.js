import styled, { StyleSheetContext } from 'styled-components';
import Header from '../components/Header';

const Body = styled.main`
    padding-top: 70px;
    display: flex;
    flex-direction: column;
`;

const Landing = styled.div`
    background-image: url('/images/landing.jpg');
`;

const SignUp = styled.div`
    
`;

const MainText = styled.h1`
    font-family: 'Lexend Giga', serif;
    color: white;
    width: 40%;
    font-weight: 300;
    font-size: 40px;
    padding: 40px 40px;
`;

export default function App() {
    return (
        <>
            <Header></Header>
            <Body>
                <Landing>
                    <MainText>YOUR GATEWAY TO PROGRAMMING IN YOUR FAVORITE LANGUAGES.</MainText>
                </Landing>
            </Body>
        </>
    );
}