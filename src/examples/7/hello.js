import React from 'react'

Hello.defaultProps = {
  name: 'World'
}

export default function Hello({ name }) {
  return (
    <h1>Hello {name}</h1>
  )
}