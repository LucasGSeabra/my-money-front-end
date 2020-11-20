import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    grid-area: foot;
    height: 100%;
    background-color: #383838;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    padding: 10px 35px;
`

const FootLink = styled.a`
    font: 16px rubik;
    color: #fff;
    text-decoration: none;
    font-weight: 200;
    &:hover {
        cursor: pointer;
        color: gray;
    }
`

function Footer(props) {
    return(
        <FooterContainer>
            <FootLink href="https://github.com/LucasGSeabra">
                Feito por: Lucas Gimenez
            </FootLink> 
        </FooterContainer>
    )
}

export default Footer