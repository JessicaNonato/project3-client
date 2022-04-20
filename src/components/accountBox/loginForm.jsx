import React, { useContext } from "react";
import { AccountContext } from "./accountContext";
import { BoxContainer, ButtonSubmit, ButtonToSignup, FormContainer, HiddedText, Input } from "./common";

const LoginForm = (props) => {
    
    const { goToSignup} = useContext(AccountContext)


    return(
        <BoxContainer>
            <FormContainer>
                <Input type='email' placeholder='Email'/>
                <Input type='password' placeholder='Password'/>
            </FormContainer>
            <HiddedText href='#'>Forget your password?</HiddedText>
            <ButtonSubmit type="submit">Login</ButtonSubmit>
            <HiddedText href='#'>Don't have an account?</HiddedText>
            <ButtonToSignup type="submit" onClick={goToSignup}>Create an Account</ButtonToSignup>
        </BoxContainer>
    )
}

export default LoginForm;