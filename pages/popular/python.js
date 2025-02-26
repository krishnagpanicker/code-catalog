import styled, { StyleSheetContext } from 'styled-components';
import Header from '../../components/Header';
import { Para, Head, Heading } from '../../components/PageElem';
import Link from 'next/link';


const Body = styled.main`
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 70vw;
`;

const PyBody = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function Python() {
    return (
        <>
            <Header></Header>
            <Body>
                <Heading>Python</Heading>
                <Head>Description</Head>
                <Para>
                    Python is a high-level general purpose language that is used for a large variety of purposes. Some of its uses include machine learning, data science, and web development. It supports various programming paradigms including object-oriented programming, functional programming, and procedural programming. There is a large and well-maintained ecosystem of libraries for use.
                </Para>
                <Head>Download</Head>
                <Para>
                    The latest Python download for Windows can be found at the <span><Link href="https://www.python.org/downloads/">Python downloads page.</Link></span> As of right now, version 3.13.2 is the latest released version. The standard download comes with the Python interpreter, pip (Python package manager), and the Python standard library among other things.
                </Para>
            </Body>
        </>
    );
}