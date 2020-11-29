import React, { useState } from 'react'
import styled from 'styled-components'
import { Tabs } from 'react-bootstrap'

const TabContainer = styled.div`
    width: 100%;
`

function TabsContainer(props) {
    const [tab, setTab] = useState(1)

    return (
        <TabContainer>
            <Tabs activeKey={tab} onSelect={key => setTab(key)}>
                {props.children}
            </Tabs>
        </TabContainer>
    )
}

export default TabsContainer