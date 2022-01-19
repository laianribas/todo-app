import React from 'react'

const PageHeader = props => {
  return (
    <header
      style={{
        marginTop: '2rem'
      }}
    >
      <h2>
        {props.name}
        <small
          style={{
            color: '#7e7e7e',
            fontSize: '1.5rem',
            marginLeft: '0.5rem'
          }}
        >
          {props.small}
        </small>
      </h2>
    </header>
  )
}

export default PageHeader
