import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Checkout2 from './views/checkout2'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Checkout2} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
