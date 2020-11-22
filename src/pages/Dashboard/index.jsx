import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content'
import CardComponent from '../../components/Card'
import { getSummary } from './dashboardActions'
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
    const {credit, debt} = props.summary

    useEffect(() => {
        props.getSummary()
    }, [])  
      
    return (
        <div>
            <ContentHeader title="Dashboard" small="Versão 1.0" />
            <Content>
                <CardComponent theme="cred" val={credit} title="Total de Créditos">
                <CashIcon />
                </CardComponent>
                <CardComponent theme="deb" val={debt} title="Total de Débitos">
                <CardIcon />
                </CardComponent>
                <CardComponent theme="cons" val={credit - debt} title="Total Consolidado">
                <WalletIcon />
                </CardComponent>
            </Content>
        </div>
    )
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)