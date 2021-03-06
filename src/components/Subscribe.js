import { React, useState } from "react";
import styled from 'styled-components';
import api from "../utils/api.utils";

const SubsDiv = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap');
    background-color: #e8b7c8;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px) {
        background-color: #F9DCDF;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`

const SubsText = styled.p`
    font-family: 'Ms Madi';
    font-size: 80px;
    color: white;
    padding: 0;
    margin: 0;
    @media screen and (max-width: 768px){
        font-family: 'Ms Madi', cursive;
        font-size: 40px;
        color: white;
        padding: 10px;
        margin: 0px;
    }
`
const SubsDivText = styled.div`
`
const SubsForm = styled.form`
`
const SubsDivForm = styled.div`
`

const InputForm = styled.input`
    border: 1px solid #F9DCDF ;
    border-radius: 20px;
    padding: 14px;
    margin-right: 10px;
    color: lightgray;
    width: 250px;
    @media screen and (max-width: 768px){
        border: 1px solid #F9DCDF ;
        border-radius: 20px;
        padding: 5px;
        margin-right: 5px;
        margin-bottom:20px;
        color: lightgray;
        width: 180px;
    }
`
const ButtonForm = styled.button`
    border: 1px solid white;
    border-radius: 20px;
    background-color: white;
    color: #F9DCDF;
    font-family: 'Ms Madi';
    font-size: 25px;
    padding: 0px 20px;

    &:hover{
        background-color: #e8b7c8;
        color: white;
        }; 

    @media screen and (max-width: 768px){
        border: 1px solid white;
        border-radius: 20px;
        background-color: white;
        color: #F9DCDF;
        font-family: 'Ms Madi', cursive;
        font-size: 18px;
        padding: 0px 20px;

        &:hover{
        background-color: #F9DCDF;
        color: white;
        }; 
    }
`


const Subscribe = () => {
    const [subscribed, setSubscribed] = useState(false)

    const sub = async (email) => {
        try {
          const subEmail = await api.subscribeEmail(email);
          setSubscribed(false)
        } catch (error) {
          console.log(error);
        }
      };

    return(
        <SubsDiv>
            <SubsDivText>
            <SubsText>Subscribe</SubsText>
            </SubsDivText>
            <SubsDivForm>
                <SubsForm>
                
                 <>
                    <InputForm type="text" placeholder="your e-mail here"></InputForm>
                    <ButtonForm onClick={(e) => {sub(e); setSubscribed(false)} }>Send</ButtonForm>
                </>
                {subscribed ? <p>E-mail cadastrado com sucesso!</p>: ''}
                
                
                </SubsForm>
            </SubsDivForm>

        </SubsDiv>
    )
}

export default Subscribe;