import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import CounterComponent from './examples/1/counter.class'
import CounterComponentUpdated from './examples/2/counter.class-updated.js'
import CounterFunctional from './examples/3/counter.functional'
import AngularCounterWrapper from './examples/5/angularjs-wrapper'

import './styles.css'

const Menu = () => (
  <ul>
    <li>
      <Link to='/1'>Counter - Class component</Link>
    </li>
    <li>
      <Link to='/2'>Counter - Class component updated</Link>
    </li>
    <li>
      <Link to='/3'>Counter - Functional component</Link>
    </li>
    <li>
      <Link to='/4'>Counter - AngularJS component</Link>
    </li>
  </ul>
)

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Menu} />
        <Route path='/1' component={CounterComponent} />
        <Route path='/2' component={CounterComponentUpdated} />
        <Route path='/3' component={CounterFunctional} />
        <Route path='/4' component={AngularCounterWrapper} />
      </div>
    </BrowserRouter>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
)
