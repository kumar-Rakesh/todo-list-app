import DataTable from 'react-data-table-component'
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react'

function Table({ items, setItems }) {

    const [value, setValue] = useState('')

    const statusMap = {
        "NOT_STARTED": "Not Started",
        "IN_PROGRESS": "In Progress",
        "FINISHED": "Finished",
        "SUSPENDED": "Suspended"
    }

    const columns = [
        {
            id: 1,
            name: "Name",
            selector: (row) => row.item,
            sortable: true,
            reorder: true
        },
        {
            id: 2,
            name: "Status",
            selector: (row) => row.status,
            sortable: true,
            reorder: true,
            cell: record => {
                return (
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" onChange={handleChangeDropdown}>
                            {record.status}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="NOT_STARTED">Not Started</Dropdown.Item>
                            <Dropdown.Item eventKey="IN_PROGRESS">In Progress</Dropdown.Item>
                            <Dropdown.Item eventKey="FINISHED">Finished</Dropdown.Item>
                            <Dropdown.Item eventKey="SUSPENDED">Suspended</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )
            }
        }, {
            id: 3,
            name: "Action",
            cell: record => {
                return (
                    <div>
                        <table>
                            <tr>
                                <td><button className="btn btn-primary btn-sm" onClick={() => handleChange(record)}>Save</button></td>
                                <td><button className="btn btn-primary btn-sm" onClick={() => handleChange(record)}>Delete</button></td>
                            </tr>
                        </table>
                    </div>
                )
            }
        }
    ]

    const handleChange = (record) => {

    }

    const handleChangeDropdown = (record) => {

    }

    return (
        <DataTable
            title="ToDo Task List"
            columns={columns}
            data={items}
            defaultSortFieldId={1}
            // sortIcon={<SortIcon />}
            pagination
        // selectableRows
        />
    )

}

export default Table




