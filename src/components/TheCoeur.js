import React from "react";
import { Link as LinkReact } from 'react-router-dom';
import styled from 'styled-components';

const SiteTitleDiv = styled.div `
    background-color: #f1f1f2; 
    height: 50px;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -20px;
`

const Link = styled(LinkReact)`
    color: black;
    padding-top: 18px;

    &:hover{
    text-decoration: none;
    }
`

const Title = styled.h4`
    font-weight: 580;
    font-size: 40px;
    @import url('https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap');
    font-family: 'Ms Madi', cursive;
    margin-top: 10px;
`


const TheCoeur = () => {
    return (
        <>
            <SiteTitleDiv>
                <Link to={'/'}>
                    <Title>The Coeur</Title>
                </Link>       
            </SiteTitleDiv>
        </>  
    )
}

export default TheCoeur; 