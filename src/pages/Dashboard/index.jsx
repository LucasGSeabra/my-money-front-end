import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content'

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