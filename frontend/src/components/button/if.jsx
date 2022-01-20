import React from 'react'

const Function = props => {
  if (props.test) {
    return props.children
  } else {
    return false
  }
}

export default Function
