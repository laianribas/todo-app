import React from 'react'
import If from './if'

const iconButton = props => {
  return (
    <If test={!props.hide}>
      <button
        className={'btn btn-' + props.type}
        onClick={props.onClick}
        style={props.style}
      >
        <i className={'fa fa-' + props.icon}></i>
      </button>
    </If>
  )
}

export default iconButton
