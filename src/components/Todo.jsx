import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { deleteList, upadteList } from '../redux/action';
import TodoForm from './TodoForm';

const Todo = ({ data }) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState({ id: null, value: '' })

    const subUpdate = (newValue) => {
        dispatch(upadteList(edit.id, newValue))
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return (
            <TodoForm edit={edit} onSubmit={subUpdate} />
        )
    }
    return (
        <div className="wrap">
            {data?.map(item => (
                <div className="text" key={item.id}>
                    <div className="content">
                        <p>{item.value}</p>
                    </div>
                    <div className="choice">
                        <span onClick={() => setEdit({ id: item.id, value: item.value })}><AiIcons.AiFillEdit /></span>
                        <span onClick={() => dispatch(deleteList(item.id))}><AiIcons.AiOutlineDelete /></span>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default Todo