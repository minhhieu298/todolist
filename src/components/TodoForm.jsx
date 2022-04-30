import React, { useState } from 'react'

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit(input)
    }
    return (
        <React.Fragment>
            {
                props.edit ? <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
                    <input type="text" placeholder='Enter' value={input} onChange={e => setInput(e.target.value)} />
                    <button>Update</button>
                </form> : <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter' value={input} onChange={e => setInput(e.target.value)} />
                    <button>Add</button>
                </form>
            }
        </React.Fragment>
    )
}

export default TodoForm