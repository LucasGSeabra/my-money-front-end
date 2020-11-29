import React, { useState } from 'react'
import styled from 'styled-components'
import { Tab, Tabs} from 'react-bootstrap'
import TabContent from '../TabContent/'

const TabContainer = styled.div`
    width: 100%;
`

function TabHeader(props) {
    const [tab, setTab] = useState(1)

    return (
        <TabContainer>
            <Tabs activeKey={tab} onSelect={key => setTab(key)}>
                <Tab eventKey="1"  title="Lista">
                </Tab>
                <Tab eventKey="2"  title="Cadastro">
                </Tab>
            </Tabs>
        </TabContainer>
    )
}

export default TabHeader