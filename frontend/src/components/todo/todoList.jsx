import React from 'react'
import IconButton from '../button/iconButton'

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => {
      return (
        <tr key={todo._id}>
          <td className={todo.done ? 'markedAsDone' : ''}>
            {todo.description}
          </td>
          <td>
            <IconButton
              type="success"
              icon="check"
              hide={todo.done}
              onClick={() => props.handleMarkAsDone(todo)}
            ></IconButton>
            <IconButton
              type="warning"
              icon="undo"
              hide={!todo.done}
              onClick={() => props.handleMarkAsPending(todo)}
              style={{ color: 'white' }}
            ></IconButton>
            <IconButton
              type="danger"
              icon="trash-o"
              hide={!todo.done}
              onClick={() => props.handleRemove(todo)}
            ></IconButton>
          </td>
        </tr>
      )
    })
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  )
}

export default TodoList
