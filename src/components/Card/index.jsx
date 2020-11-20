import React from 'react'
import styled from 'styled-components'

const CardInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    aling-items: center; 
    margin-left: 10px;
`

const CardVal = styled.h1`
    font: 24px rubik;
    font-weight: 600;
`

function Card(props) {
    return (
        <div>
            <CardInfo>
                <CardVal>{props.val}</CardVal>
                {props.title}   
            </CardInfo>
                {props.children}
        </div>
    )
}

export default Card