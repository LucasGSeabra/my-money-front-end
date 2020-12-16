import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ContentHeader from '../../components/ContentHeader/'
import Content from '../../components/Content/'
import TabsContainer from '../../components/TabsContainer/'
import Tab from '../../components/TabContent/'
import List from '../../components/List/'
import Form from '../../components/Form/'
import { create, changeTab } from './billingCycleActions'


function BillingCycle(props) {

    return (
        <div>
            <ContentHeader title="Billing Cycles" small="Cadastro" />
            <Content>
                <TabsContainer tabKey={props.tabKey} changeTab={props.changeTab}>
                    <Tab eventKey={1} title="Lista">
                        <List></List>
                    </Tab>
                    <Tab eventKey={2} title="Cadastro">
                        <Form onSubmit={props.create}></Form>
                    </Tab>
                    <Tab eventKey={3} title="Editar" disabled={true}>
                        <Form onSubmit={props.create}></Form>
                    </Tab>
                </TabsContainer>
            </Content>
        </div>
    )
}

const mapStateToProps = state => ({tabKey: state.billingCycle.tabKey})
const mapDispatchToProps = dispatch => bindActionCreators({ create, changeTab }, dispatch) 
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle)