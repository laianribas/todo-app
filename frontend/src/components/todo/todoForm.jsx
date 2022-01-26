import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import IconButton from '../button/iconButton'
import Grid from '../grid/grid'

import { changeDescription, search, add, clear } from './todoActions'

class todoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler = (e) => {
    const { add, search, description, clear } = this.props
    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description)
    } else if (e.key === 'Escape') {
      clear()
    }
  }

  render() {
    const { add, search, description, clear } = this.props
    return (
      <div role="form" className="todoForm">
        <div className="row justify-content-between align-items-center">
          <Grid cols="10">
            <input
              type="text"
              id="description"
              className="form-control"
              placeholder="Adicione ou pesquise uma tarefa"
              value={this.props.description}
              onChange={this.props.changeDescription}
              onKeyUp={this.keyHandler}
            />
          </Grid>
          <Grid cols="2">
            <IconButton
              type="primary"
              icon="plus"
              onClick={() => add(description)}
            />
            <IconButton
              type="info"
              icon="search"
              onClick={() => search()}
              style={{ color: 'white' }}
            />
            <IconButton type="default" icon="close" onClick={() => clear()} />
          </Grid>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  description: state.todo.description
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ add, changeDescription, search, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(todoForm)
