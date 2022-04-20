import styled from "styled-components";

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const HiddedText = styled.p`
    font-size: 12px;
    color: #504e4e;
    font-weight: 300;
    text-decoration: none;
    margin-top: -25px;
    margin-bottom: 22px;
`

export const Input = styled.input`
    width: 100%;
    height: 42px;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.3);
    padding: 10px;
    font-size: 12px;
    margin-bottom: 10px;
`

export const ButtonSubmit = styled.button`
    width: 100%;
    padding: 11px 40%;
    color: #504e4e;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    transition: all, 240ms ease-in-out;
    background: #F9DCDF;
    margin-bottom: 40px;
    
    
    &:hover {
        filter: brightness(1.05);
    }
`
export const ButtonToSignup = styled.button`
    width: 100%;
    padding: 11px ;
    color: #504e4e;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    transition: all, 240ms ease-in-out;
    background: #F9DCDF;
    margin-bottom: 30px;
    margin-top: -20px;
    
    &:hover {
        filter: brightness(1.05);
    }
`
