import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Counter from '../1/counter.class'

test('initial count should be 0', () => {
  const { getByText } = render(<Counter />)
  expect(getByText('Count is 0')).toBeInTheDocument()
})

test('clicking on "Inc" button should increment the count', () => {
  const { getByText } = render(<Counter />)
  const incrementButton = getByText(/inc/i)

  fireEvent.click(incrementButton)
  expect(getByText('Count is 1')).toBeInTheDocument()

  fireEvent.click(incrementButton)
  expect(getByText('Count is 2')).toBeInTheDocument()
})
