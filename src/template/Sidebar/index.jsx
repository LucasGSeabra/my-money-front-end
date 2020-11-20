import React from 'react'
import styled from 'styled-components'
import {Grid, Cash} from '@styled-icons/ionicons-outline'

const SidebarContainer = styled.div`
    grid-area: sidebar;
    height: 100vh;
    background-color: #383838;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-top: 10px;
`

const SidebarMenu = styled.ul`
    display: flex;
    align-items: left;
    flex-direction: column;
    list-style: none;
    width: 100%;
`

const SidebarMenuItem = styled.a` 
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    justify-content: left;
    padding: 0px 30px;
    text-decoration: none;
    &:hover {
        background: rgba(200, 200, 200, 0.05);  
        box-shadow: inset 3px 0 0 0 #ffffff;    
        cursor: pointer;
    }
`

const SidebarMenuItemLabel = styled.p`
    font: 24px rubik;
    color: #fff;
    font-weight: 500;
    text-align: left;
    margin-left: 5px;
`

const GridIcon = styled(Grid)`
    color: #fff;
    width: 24px;
    height: 24px;  
`

const CashIcon = styled(Cash)`
    color: #fff;
    width: 24px;
    height: 24px;  
`

function Sidebar(props) {
    return (
        <SidebarContainer>
            <SidebarMenu> 
                <SidebarMenuItem href="/">
                    <GridIcon />
                    <SidebarMenuItemLabel>Dashboard</SidebarMenuItemLabel>
                </SidebarMenuItem>
                <SidebarMenuItem href="/billingCycles">
                    <CashIcon />
                    <SidebarMenuItemLabel>Ciclo de Pagamento</SidebarMenuItemLabel>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar