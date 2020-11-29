import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgba(255, 255, 255);
    margin: 0px 10px;
`

function Content(props) {
    return (
        <ContentContainer>
            {props.children}
        </ContentContainer>
    )
}

export default Content