import React, { useState } from 'react'
import { Row, Col, Button, FormControl } from 'react-bootstrap'
import './Todolist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSave, faTrash, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'



function Todolist({ todo, setTodo }) {

    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');


    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id != id);
        setTodo(newTodo)

    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id == id) {
                item.status = !item.status
            }
            return item
        })

        setTodo(newTodo);
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id == id) {
                item.title = value
            }
            return item
        })

        setTodo(newTodo);
        setEdit(null)

    }


    return (
        <div>
            {
                todo.map(item => (
                    <div key={item.id} className="listitem">
                        {
                            edit == item.id ?
                                <div>
                                    <input value={value} onChange={(e) => setValue(e.target.value)} />

                                </div> :
                                <div className={!item.status ? "close" : ''}>{item.title}</div>

                        }

                        {
                            edit == item.id ?
                                <div>
                                    <Button onClick={() => saveTodo(item.id)} size="sm"><FontAwesomeIcon icon={faSave} /></Button>
                                </div> :
                                <div>
                                    <Button onClick={() => deleteTodo(item.id)} size="sm" ><FontAwesomeIcon icon={faTrash} /></Button>
                                    <Button onClick={() => editTodo(item.id, item.title)} className="btn" size="sm"><FontAwesomeIcon icon={faEdit} /></Button>
                                    <Button onClick={() => statusTodo(item.id)} className="btn" size="sm">
                                        {
                                            item.status ? <FontAwesomeIcon icon={faLockOpen} /> : <FontAwesomeIcon icon={faLock} />
                                        }
                                    </Button>

                                </div>
                        }


                    </div>
                ))
            }
        </div>
    )
}

export default Todolist