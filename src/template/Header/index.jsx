import React from 'react'
import {Header, Nav, Site, Icon} from 'tabler-react'
import './style.css'

function PageHeader(props) {
    return(
        <div id="page-header">
            <Site.Header className="nav">
                <Header.H1>
                    <Icon prefix="fa" name="money" className="money-icon"/>MyMoney
                </Header.H1>
            </Site.Header>
            <Site.Nav>
                <Nav.Link hasSubNav value="Dashboard" icon="list" to="/#/" > Dash</Nav.Link>
            </Site.Nav>
        </div>
    )
}

export default PageHeader