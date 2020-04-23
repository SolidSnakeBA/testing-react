import angular from 'angular'
import { fireEvent, getQueriesForElement } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

import CounterModule from './counter.angularjs'

test('initial count should be 0', () => {
  const { getByText } = render('<my-counter></my-counter>')
  expect(getByText('Count is 0')).toBeInTheDocument()
})

test('clicking on "Inc" button should increment the count', () => {
  const { getByText } = render('<my-counter></my-counter>')
  const incrementButton = getByText(/inc/i)

  fireEvent.click(incrementButton)
  expect(getByText('Count is 1')).toBeInTheDocument()

  fireEvent.click(incrementButton)
  expect(getByText('Count is 2')).toBeInTheDocument()
})

function render(html) {
  const container = document.createElement('div')
  document.body.innerHTML = ''
  container.innerHTML = html
  document.body.appendChild(container)
  angular.bootstrap(container, [CounterModule.name])
  return {
    container,
    ...getQueriesForElement(container)
  }
}
