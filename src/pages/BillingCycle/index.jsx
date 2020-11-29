import React from 'react'
import ContentHeader from '../../components/ContentHeader/'
import Content from '../../components/Content/'
import TabsContainer from '../../components/TabsContainer/'
import Tab from '../../components/TabContent/'
import List from '../../components/List/'

function BillingCycle(props) {

    return (
        <div>
            <ContentHeader title="Billing Cycles" small="Cadastro" />
            <Content>
                <TabsContainer>
                    <Tab key="1" title="list">
                        <List />
                    </Tab>
                    <Tab key="2" title="Cadastro">
                        Teste
                    </Tab>
                </TabsContainer>
            </Content>
        </div>
    )
}

export default BillingCycle