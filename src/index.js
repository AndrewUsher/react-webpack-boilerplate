import React from 'react'
import { render } from 'react-dom'
import './styles/style.styl'
import App from './containers/App'

render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
