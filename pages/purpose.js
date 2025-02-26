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

export default function Purpose() {
    return(
        <>
            <Header></Header>
            <Body>
                <Grid>
                    <Lang href="/purpose/csharp">
                        <LangName>C#</LangName>
                        <LangDesc>A multi-paradigm, open-source language typically used for game and app development. The language supports many paradigms, and produces highly portable code.</LangDesc>
                    </Lang>
                    <Lang href="/purpose/verilog">
                        <LangName>Verilog</LangName>
                        <LangDesc>Verilog is an HDL (Hardware Description Language) that describes the functioning of a logical circuit. It is a highly specific language used primarily for the design and verification of digital circuits.</LangDesc>
                    </Lang>
                </Grid>
            </Body>
        </>
    );
}