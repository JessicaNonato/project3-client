import React, { useState } from "react";
import styled from "styled-components";
import AccountContext from './accountContext';
import LoginForm from "./loginForm";
import SignupForm from "./signupForm";

const BoxContainer = styled.div`
    width: 400px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    background-color: #f0f1e8;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`
const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InsideContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`

const AccountBox = (props) => {
    const [active, setActive] = useState('login')
    
    const goToSignup = () => {
        setTimeout(() => {
            setActive('signup')
        }, 400)        
    }

    const goToLogin = () => {
        setTimeout(() => {
            setActive('login')
        }, 400)        
    }

    const contextValue = { goToLogin, goToSignup }

   
    return (
        <AccountContext.Provider value={contextValue}>
        <BoxContainer>
                {active === 'login' && <HeaderContainer>
                    {/* <BeforeHeaderContainer>Already have an account?</BeforeHeaderContainer>
                    <HeaderText>LOGIN</HeaderText> */}
                </HeaderContainer>}
                {active === 'signup' && <HeaderContainer>
                    {/* <BeforeHeaderContainer>Create an Account</BeforeHeaderContainer>
                    <HeaderText>SIGNUP</HeaderText> */}
                </HeaderContainer>}
                <InsideContainer>
                    {active === 'login' && <LoginForm/>}
                    {active === 'signup' && <SignupForm/>}
                </InsideContainer>
        </BoxContainer>
        </AccountContext.Provider>
    )
}

export default AccountBox;