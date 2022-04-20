import React, { useContext } from "react";
import { AccountContext } from "./accountContext";
import { BoxContainer, ButtonSubmit, FormContainer, HiddedText, Input } from "./common";

const SignupForm = (props) => {

    const { goToLogin} = useContext(AccountContext)

    return(
        <BoxContainer>
            <FormContainer>
                <Input type='text' placeholder='Name'/>
                <Input type='email' placeholder='Email'/>
                <Input type='password' placeholder='Password'/>
                <Input type='password' placeholder='Confirm Password'/>
            </FormContainer>
            <HiddedText href='#'>Already have an account?</HiddedText>
            <ButtonSubmit type="submit" onClick={goToLogin}>Login</ButtonSubmit>
        </BoxContainer>
    )
}

export default SignupForm;