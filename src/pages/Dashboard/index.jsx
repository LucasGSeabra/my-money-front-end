import React from 'react'
import styled from 'styled-components'
import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content'
import { Cash, Card, Wallet } from '@styled-icons/ionicons-outline'

const CashIcon = styled(Cash)`
    opacity: 30%;
    width: 72px;
    height: 72px;  
`

const CardIcon = styled(Card)`
    opacity: 30%;
    width: 72px;
    height: 72px;  
`

const WalletIcon = styled(Wallet)`
    opacity: 30%;
    width: 72px;
    height: 72px;  
`

function Dashboard(props) {
    return (
        <div>
            <ContentHeader title="Dashboard" small="Versão 1.0" />
            <Content>
                Dashboard
            </Content>
        </div>
    )
}

export default Dashboard