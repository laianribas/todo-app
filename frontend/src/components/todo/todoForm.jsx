import React from 'react'

const todoForm = props => {
  return (
    <div role="form" className="todoForm">
      <div className="col-xs-12 col-sm-9 col-md-10">
        <input
          type="text"
          id="descrption"
          className="form-control"
          placeholder="Adicione uma tarefa"
        />
      </div>
      <div className="col-xs-12 col-sm-9 col-md-10">
        <button className="btn btn-primary">
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  )
}

export default todoForm
