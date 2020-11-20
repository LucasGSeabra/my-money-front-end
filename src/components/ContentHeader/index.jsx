import React from 'react'
import styled from 'styled-components'

const ContentTitle = styled.h1`
    font: 40px rubik;
    font-weight: 600;
    padding: 20px;
`

function ContentHeader(props) {
    return (
        <div>
            <ContentTitle>{props.title} <small>{props.small}</small></ContentTitle>
        </div>
    )
}

export default ContentHeader