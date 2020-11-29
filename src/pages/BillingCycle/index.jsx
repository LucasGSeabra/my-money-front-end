import React from 'react'
import ContentHeader from '../../components/ContentHeader/'
import Content from '../../components/Content/'
import Tabs from '../../components/Tabs/'

function BillingCycle(props) {
    return (
        <div>
            <ContentHeader title="Billing Cycles" small="Cadastro" />
            <Content>
                <Tabs></Tabs>
            </Content>
        </div>
    )
}

export default BillingCycle