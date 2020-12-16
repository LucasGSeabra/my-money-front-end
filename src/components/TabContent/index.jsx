import React from 'react'
import styled from 'styled-components'
import { Tab } from 'react-bootstrap'

const ContentContainer = styled.div`
    height: 100%;
    font: 24px rubik;
    padding: 15px;
`

function TabContent(props) {
    return (
        <Tab eventKey={props.eventKey} title={props.title} disabled={props.disabled} >
            <ContentContainer>
                {props.children}
            </ContentContainer>                
        </Tab>
    )
}

export default TabContent