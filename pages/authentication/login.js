import React, { useState } from 'react';
import styled, { StyleSheetContext } from 'styled-components';
import { auth } from '@/library/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const Form = styled.form`
    width: 40vw;
    height: 70vh;
    border: 3px solid black;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
`;

const FormTop = styled.div`
    background-color: #F1F0E9;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 30px;
    padding: 10px 0px;
`;

const Email = styled.div`
    margin-top: 20px;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    display: flex;
    flex-direction: column;
`;

const FieldText = styled.h1`
    width: 82%;    
    text-align: left;
    margin: 0px auto;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 300;
`;

const EmailInput = styled.input`
    margin: 0px auto;
    margin-bottom: 40px;
    border: 1px solid black;
    height: 30px;
    width: 80%;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    padding: 4px;

    &: focus {
        border: 2px solid black;
    }
`;

const PasswordInput = styled.input`
    margin: 0px auto;
    margin-bottom: 10px;
    border: 1px solid black;
    height: 30px;
    width: 80%;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    padding: 4px;

    &: focus {
        border: 2px solid black;
    }
`;

const Show = styled.div`
    width: 80%;
    margin: 0px auto;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
`;

const ShowBox = styled.input`
    width: 16px;
    height: 16px;
    margin: 5px;
    
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
    padding: 20px;
`;

const Submit = styled.button`
    border-radius: 0px;
    border: 2px solid black;
    font-family: 'Inter', sans-serif;
    font-size: 22px;
    font-weight: 400;
    height: 45px;
    width: 175px;
    background-color: white;
    transition: height 0.3s ease, width 0.3s ease;

    &: hover {
        height: 50px;
        width: 180px;
    }
`;

const Status = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    text-align: center;
`;

const Return = styled(Link)`
    margin: 20px;
`;

export default function Login() {
    // Email and password as states, updated when the respective fields are changed.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("");

    // Create account function for when the submit button is clicked.
    const verifyLogin = (event) => {
        event.preventDefault();
        console.log(email + " " + password);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setText("Logged in successfully. Redirecting...");
                setTimeout(() => {
                    router.push("/");
                }, 3000);
                console.log("Logged in: ", userCredential.user);
            })
            .catch((error) => {
                if (error.code === "auth/user-not-found") {
                    setText("No account found with this email.");
                    console.log("No account found with this email");
                }
                else if (error.code === "auth/wrong-password") {
                    setText("Incorrect password.");
                    console.log("Incorrect password");
                }
                else {
                    setText("Error logging in.");
                    console.log("Login failed: ", error.message);
                }
            });
    }

    const [shown, toggle] = useState(false);
    return(
        <>
            <Return href="/">
                <Image height={50} width={50} src="/images/return.svg"/>
            </Return>
            <Form onSubmit={verifyLogin}>
                <FormTop>CREATE YOUR ACCOUNT</FormTop>
                <Email>
                    <FieldText>Mail</FieldText>
                    <EmailInput type="email" placeholder="Enter mail address" onChange={(e) => setEmail(e.target.value)}/>
                    <FieldText>Password</FieldText>
                    <PasswordInput type={shown ? "text" : "password"} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
                    <Show>
                        <ShowBox type="checkbox" checked={shown} onChange={() => toggle(!shown)}/>
                        Show Password
                    </Show>
                </Email>
                <ButtonContainer>
                    <Submit type="submit">Continue</Submit>
                </ButtonContainer>
                <Status>{text}</Status>
            </Form>
        </>
    );
}