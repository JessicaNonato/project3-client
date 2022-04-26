import styled from "styled-components";

export const BoxContainer = styled.div`
    width: 400px;
    min-height: 430px;
    display: flex;
    flex-direction: column;
    background-color: #f0f1e8;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    justify-content: center;
    overflow: hidden;
`

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
    font-weight: 500;
 ` 

export const QuestionText = styled.p` 
    font-size: 11px;
    color: #504e4e;
    font-weight: 100;
    text-decoration: none;
    margin-top: -2px;
    margin-bottom: 18px;
    text-align: center;
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
    padding: 11px;
    color: #504e4e;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    transition: all, 240ms ease-in-out;
    background: #F9DCDF;
    margin-bottom: 15px;  
    &:hover {
        filter: brightness(1.05);
    }
`

export const InsideContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`

export const ButtonCancel = styled.button`
    width: 100px;
    height: 30px;
    color: #504e4e;
    font-size: 12px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    transition: all, 240ms ease-in-out;
    background: #F9DCDF;
    margin-bottom: 8px;  
    margin-top: 2px;
    text-align: center;
    &:hover {
        filter: brightness(1.05);
    }
`

