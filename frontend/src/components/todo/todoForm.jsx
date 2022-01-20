import React from 'react'
import IconButton from '../button/iconButton'
import Grid from '../grid/grid'

const todoForm = props => {
  return (
    <div role="form" className="todoForm">
      <div class="row justify-content-between align-items-center">
        <Grid cols="11">
          <input
            type="text"
            id="descrption"
            className="form-control"
            placeholder="Adicione uma tarefa"
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
