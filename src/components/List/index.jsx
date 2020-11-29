import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from '../../pages/BillingCycle/billingCycleActions'

function List(props) {


    useEffect(() => {
        props.getList()
        console.log(props.list)
    }, []) 

    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mes</th>
                        <th>Ano</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(List)