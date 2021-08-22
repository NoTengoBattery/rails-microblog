import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../site/components/App'
import ContextProvider from '../site/components/ContextAPI/ContextProvider'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ContextProvider>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </ContextProvider>,
    document.body.appendChild(document.createElement('div'))
  )
})
