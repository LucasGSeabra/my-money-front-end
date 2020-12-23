import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ContentHeader from '../../components/ContentHeader/'
import Content from '../../components/Content/'
import TabsContainer from '../../components/TabsContainer/'
import Tab from '../../components/TabContent/'
import List from '../../components/List/'
import BillingCycleForm from '../../components/BillingCycleForm/'
import { create, update, remove, resetForm } from './billingCycleActions'


function BillingCycle(props) {

    const [tabKey, setTabKey] = useState(1)
   
    return (
        <div>
            <ContentHeader title="Ciclos de Pagamento" small="Cadastro" />
            <Content>
                <TabsContainer tabKey={tabKey} changeTab={setTabKey} reset={resetForm}>
                    <Tab eventKey={1} title="Lista">
                        <List changeTab={setTabKey}></List>
                    </Tab>
                    <Tab eventKey={2} title="Cadastro">
                        <BillingCycleForm onSubmit={props.create} buttonTitle={'Cadastrar'} />
                    </Tab>
                    <Tab eventKey={3} title="Editar" disabled={true}>
                        <BillingCycleForm onSubmit={props.update} buttonTitle={'Editar'} />
                    </Tab>
                    <Tab eventKey={4} title="Remover" disabled={true}>
                        <BillingCycleForm onSubmit={props.remove} buttonTitle={'Remover'} readOnly={true} />
                    </Tab>
                </TabsContainer>
            </Content>
        </div>
    )
}


const mapDispatchToProps = dispatch => bindActionCreators({ create, update, remove, resetForm }, dispatch) 
export default connect(null, mapDispatchToProps)(BillingCycle)