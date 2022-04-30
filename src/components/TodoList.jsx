import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm';
import { useDispatch, useSelector } from 'react-redux'
import { createList } from '../redux/action'

const TodoList = () => {
    const dispatch = useDispatch();
    const { listTodos } = useSelector(state => state.list)

    const addList = (value) => {
        if (value === '') {
            return
        }
        dispatch(createList({
            id: Math.floor(Math.random() * 10000000),
            value: value
        }))

    }
    
    return (
        <React.Fragment>
            <TodoForm onSubmit={addList} />
            <Todo data={listTodos} />
        </React.Fragment>
    )
}

export default TodoList