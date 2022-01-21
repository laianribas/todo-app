import React from 'react'
import IconButton from '../button/iconButton'
import Grid from '../grid/grid'

const todoForm = props => {
  return (
    <div role="form" className="todoForm">
      <div className="row justify-content-between align-items-center">
        <Grid cols="11">
          <input
            type="text"
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa"
            value={props.description}
            onChange={props.handleChange}
          />
        </Grid>
        <Grid cols="1">
          <IconButton type="primary" icon="plus" onClick={props.handleAdd} />
        </Grid>
      </div>
    </div>
  )
}

export default todoForm
