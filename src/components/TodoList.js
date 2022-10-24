import React, { useEffect } from 'react'

import { useState } from 'react'
import * as api from '../api/api'
import Table from './Table'

function TodoList() {
    const [items, setItems] = useState([])
    const [name, setName] = useState('')
    const [removeId, setId] = useState([])

    useEffect(() => {
        getAllToDoItems()
    })

    const getAllToDoItems = () => {
        api.getAllToDoItems().then((res) => {
            const data = res.data.data
            setItems(data)
        }).catch(err => console.log(err))
    }

    const getItems = () => {
        let list = []
        for (const l of items) {

        }
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const getId = (id) => {
        const listIds = removeId.concat({ id });
        setId(listIds);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length === 0) return
        api.addToDoItem({ item: name }).then((res) => {
            const { _id: id } = res.data.data
            const newList = items.concat({ id, name })
            setItems(newList)
            setName('')
        }
        ).catch(err => {
            console.log(err)
        })
    }

    const handleRemove = (e) => {
        let newList = items
        for (let element of removeId) {
            newList = newList.filter((item) => item.id !== element.id)
        }
        setItems(newList)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={handleSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Todo List</h1>

                        <div className="form-group">
                            <label htmlFor="name">Create Task</label>
                            <input type="text" className="form-control" name="task_name"
                                value={name} placeholder="Enter the task..." onChange={handleChange} />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary btn-block">
                            Add Task
                        </button>

                        <button type="button" className="btn btn-primary btn-block btn-remove"
                            onClick={handleRemove}>
                            Remove Task
                        </button>

                        <br />
                        <br />
                        {/* <div className="form-group">
                            <h2 htmlFor="name">List</h2>
                            <ul className="unordered-list">
                                {
                                    items.map((item) => {
                                        return <li key={item.id}>
                                            <input type="checkbox" onChange={() => getId(item.id)} /> {item.item}
                                        </li>;
                                    })
                                }
                            </ul>
                        </div> */}
                    </form>
                    <Table items={items} setItems={setItems} />
                </div>
            </div >
        </div >
    )
}

export default TodoList
