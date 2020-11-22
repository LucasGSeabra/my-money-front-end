import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
`

function Content(props) {
    return (
        <ContentContainer>
            {props.children}
        </ContentContainer>
    )
}

export default Content