import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import IconButton from '../button/iconButton'
import { markAsDone, markAsPending, remove } from './todoActions'

const TodoList = (props) => {
  const renderRows = () => {
    const list = props.list || []
    return list.map((todo) => {
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
              onClick={() => props.markAsDone(todo)}
            ></IconButton>
            <IconButton
              type="warning"
              icon="undo"
              hide={!todo.done}
              onClick={() => props.markAsPending(todo)}
              style={{ color: 'white' }}
            ></IconButton>
            <IconButton
              type="danger"
              icon="trash-o"
              hide={!todo.done}
              onClick={() => props.remove(todo)}
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

const mapStateToProps = (state) => ({
  list: state.todo.list
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
