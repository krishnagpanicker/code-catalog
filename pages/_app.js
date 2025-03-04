import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { StateContext } from '@/context/StateContext';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
    }

    body {
        margin: 0px;
        padding: 0px;
    }
`;

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Code Catalog</title>
                <meta name='description' content='Guide to start coding in your favorite programming languages.'></meta>
            </Head>
            <GlobalStyle />
            <StateContext>
                <Component {...pageProps}/>
            </StateContext>
        </>
    );
}
