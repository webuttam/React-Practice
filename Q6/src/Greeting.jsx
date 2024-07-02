import React from 'react'
import PropTypes from 'prop-types'

const Greeting = ({name}) => {
  return (
    <div><h3>Hi {name}</h3></div>
  )
}
Greeting.propTypes={
  name:PropTypes.string.isRequired,
}

export default Greeting