import React from 'react'
import IconButton from '../button/iconButton'
import Grid from '../grid/grid'

const todoForm = props => {
  const keyHandler = e => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <div role="form" className="todoForm">
      <div className="row justify-content-between align-items-center">
        <Grid cols="10">
          <input
            type="text"
            id="description"
            className="form-control"
            placeholder="Adicione ou pesquise uma tarefa"
            value={props.description}
            onChange={props.handleChange}
            onKeyUp={keyHandler}
          />
        </Grid>
        <Grid cols="2">
          <IconButton type="primary" icon="plus" onClick={props.handleAdd} />
          <IconButton
            type="info"
            icon="search"
            onClick={props.handleSearch}
            style={{ color: 'white' }}
          />
          <IconButton type="default" icon="close" onClick={props.handleClear} />
        </Grid>
      </div>
    </div>
  )
}

export default todoForm
