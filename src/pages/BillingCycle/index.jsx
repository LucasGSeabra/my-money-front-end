import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ContentHeader from '../../components/ContentHeader/'
import Content from '../../components/Content/'
import TabsContainer from '../../components/TabsContainer/'
import Tab from '../../components/TabContent/'
import List from '../../components/List/'
import Form from '../../components/Form/'
import { create } from './billingCycleActions'


function BillingCycle(props) {
    const [tabKey, setTabKey] = useState(1)

    return (
        <div>
            <ContentHeader title="Billing Cycles" small="Cadastro" />
            <Content>
                <TabsContainer tabKey={tabKey} onSelect={key => setTabKey(key)} >
                    <Tab eventKey="1" title="Lista">
                        <List></List>
                    </Tab>
                    <Tab eventKey="2" title="Cadastro">
                        <Form onSubmit={props.create}></Form>
                    </Tab>
                </TabsContainer>
            </Content>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ create }, dispatch) 
export default connect(null, mapDispatchToProps)(BillingCycle)