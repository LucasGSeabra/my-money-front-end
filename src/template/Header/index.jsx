import React from 'react'
import styled from 'styled-components'
import {Wallet} from '@styled-icons/ionicons-outline'

const HeaderContainer = styled.div`
    grid-area: head;
    height: 100%;
    background-color: #252529;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    padding: 10px 75px;
`

const HeaderTitle = styled.h1`
    font: 40px rubik;
    font-weight: 700;
`

const WalletIcon = styled(Wallet)`
    color: white;
    width: 40px;
    height: 40px; 
`

function PageHeader(props) {
    return(
        <HeaderContainer>
            <WalletIcon />
            <HeaderTitle>MyMoney</HeaderTitle>
        </HeaderContainer>
    )
}

export default PageHeader