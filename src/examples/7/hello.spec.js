import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Hello from './hello'

test('Say "Hello World" when no name prop is set', () => {
  const { getByText } = render(<Hello />)
  expect(getByText('Hello World')).toBeInTheDocument()
})

test('Say "Hello" and name when name prop is set', () => {
  const { getByText } = render(<Hello name="Bob" />)
  expect(getByText('Hello Bob')).toBeInTheDocument()
})
