import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ContentHeader from '../../components/ContentHeader/'
import Content from '../../components/Content/'
import TabsContainer from '../../components/TabsContainer/'
import Tab from '../../components/TabContent/'
import List from '../../components/List/'
import Form from '../../components/Form/'
import { create, update, remove } from './billingCycleActions'


function BillingCycle(props) {

    const [tabKey, setTabKey] = useState(1)
    
    return (
        <div>
            <ContentHeader title="Billing Cycles" small="Cadastro" />
            <Content>
                <TabsContainer tabKey={tabKey} changeTab={setTabKey}>
                    <Tab eventKey={1} title="Lista">
                        <List changeTab={setTabKey}></List>
                    </Tab>
                    <Tab eventKey={2} title="Cadastro">
                        <Form onSubmit={props.create} buttonTitle={'Cadastrar'} />
                    </Tab>
                    <Tab eventKey={3} title="Editar" disabled={true}>
                        <Form onSubmit={props.update} buttonTitle={'Editar'} />
                    </Tab>
                    <Tab eventKey={4} title="Remover" disabled={true}>
                        <Form onSubmit={props.remove} buttonTitle={'Remover'} readOnly={true} />
                    </Tab>
                </TabsContainer>
            </Content>
        </div>
    )
}


const mapDispatchToProps = dispatch => bindActionCreators({ create, update, remove }, dispatch) 
export default connect(null, mapDispatchToProps)(BillingCycle)