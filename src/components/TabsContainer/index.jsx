import React, { useState } from 'react'
import styled from 'styled-components'
import { Tabs } from 'react-bootstrap'

const TabContainer = styled.div`
    width: 100%;
`

function TabsContainer(props) {

    return (
        <TabContainer>
            <Tabs activeKey={props.tabKey} onSelect={() => props.onSelect()}>
                {props.children}
            </Tabs>
        </TabContainer>
    )
}

export default TabsContainer