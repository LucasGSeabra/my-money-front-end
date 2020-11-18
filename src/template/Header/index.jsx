import React from 'react'
import {Header, Nav} from 'tabler-react'
import './style.css'

function PageHeader(props) {
    return(
        <div id="page-header">
            <Header.H1>MyMoney</Header.H1>
            <Nav className="nav">
            </Nav>
        </div>
    )
}

export default PageHeader