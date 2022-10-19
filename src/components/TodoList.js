import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid';
// import * as api from '../api/api'

function TodoList() {
    const [items, setList] = React.useState([]);
    const [name, setName] = React.useState('');
    const [removeId, setId] = React.useState([]);

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const getId = (id) => {
        const listIds = removeId.concat({ id });
        setId(listIds);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uuid();
        const newList = items.concat({ id, name });
        setList(newList);

        e.target.value = '';
        handleChange(e);

        // api.updateTodoList(newList).then(res => {

        // }).catch(err => console.log(err))
    }

    const handleRemove = (e) => {
        let newList = items;
        for (let element of removeId) {
            newList = newList.filter((item) => item.id !== element.id);
        }
        setList(newList);

        // api.updateTodoList(newList).then(res => {

        // }).catch(err => console.log(err))
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
                        <div className="form-group">
                            <h2 htmlFor="name">List</h2>
                            <ul className="unordered-list">
                                {
                                    items.map((item) => {
                                        return <li key={item.id}>
                                            <input type="checkbox" onChange={() => getId(item.id)} />{item.name}
                                        </li>;
                                    })
                                }
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoList
