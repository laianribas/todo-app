import React from 'react'
import IconButton from '../button/iconButton'

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => {
      return (
        <tr key={todo._id}>
          <td>{todo.description}</td>
          <td>
            <IconButton
              type="danger"
              icon="trash-o"
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
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  )
}

export default TodoList
