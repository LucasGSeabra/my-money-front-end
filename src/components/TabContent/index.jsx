import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
    height: 100%;
    font: 24px rubik;
    padding: 15px;
`

function TabContent(props) {
    return (
        <ContentContainer>
            {props.children}
        </ContentContainer>
    )
}

export default TabContent