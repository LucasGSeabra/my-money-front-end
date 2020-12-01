import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from '../../pages/BillingCycle/billingCycleActions'

function List(props) {

    const list = props.list || []

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
                        <th>Mês</th>
                        <th>Ano</th>
                    </tr>
                </thead>
                <tbody>
                    { list.map(bc => (
                        <tr key={bc._id}>
                            <td>{bc.name}</td>
                            <td>{bc.month}</td>
                            <td>{bc.year}</td>
                        </tr>
                    )) }
                </tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(List)