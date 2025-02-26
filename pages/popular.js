import styled, { StyleSheetContext } from 'styled-components';
import Header from '../components/Header';
import Link from 'next/link';

const Body = styled.main`
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 70vw;
    margin-top: 20px;
`;

const Lang = styled(Link)`
    margin: 15px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
    box-sizing: border-box;
    height: 200px;
    transition: margin 0.3s ease;

    &: hover {
        margin: 5px;
    }
`;

const LangName = styled.h1`
    font-family: 'Barlow', serif;
    font-size: 20px;
    font-weight: 400;
    margin: 5px;
    padding: 3px;
    border-bottom: 2px solid black;
`;

const LangDesc = styled.p`
    font-family: 'Barlow', serif;
    font-size: 16px;
    font-weight: 300;
    margin: 5px;
    margin-top: 0px;
    padding: 3px;
`;

export default function Popular() {
    return(
        <>
            <Header></Header>
            <Body>
                <Grid>
                    <Lang href="/popular/javascript">
                        <LangName>JavaScript</LangName>
                        <LangDesc>A dynamic language geared towards web development. JavaScript is a scripting language that enables dynamic content updates to create dynamic web content.</LangDesc>
                    </Lang>
                    <Lang href="/popular/python">
                        <LangName>Python</LangName>
                        <LangDesc>A high-level general purpose interpreted language used for a variety of applications including machine learning, data science, and web development. Supports many programming paradigms and has a large, maintained ecosystem.</LangDesc>
                    </Lang>
                </Grid>
            </Body>
        </>
    );
}