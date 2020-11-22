import React from 'react'
import styled, { css } from 'styled-components'

const CardContainer = styled.div`
    width: 30%;
    margin: 40px;
    padding: 15px;
    display: flex;
    flex-direction: row;
    aling-items: center;
    justify-content: space-between;
    ${props => props.theme === 'cred' && css`
        background: rgb(47, 151, 71);
    `}
    ${props => props.theme === 'deb' && css`
        background: rgb(151, 71, 47);
    `}
    ${props => props.theme === 'cons' && css`
        background: rgb(47, 71, 151);
    `}
`

const CardInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    aling-items: center; 
    margin-left: 10px;
`

const CardVal = styled.h1`
    font: 24px rubik;
    font-weight: 600;
`

function Card(props) {
    return (
        <CardContainer theme={props.theme}>
            <CardInfo>
                <CardVal>{props.val}</CardVal>
                {props.title}   
            </CardInfo>
                {props.children}
        </CardContainer>
    )
}

export default Card