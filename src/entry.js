import React from 'react'
import ReactDom from 'react-dom'
import 'normalize.css'

import './index.html'
import './style/app.scss'

import App from './App'

ReactDom.render(
  (<App />),
  document.getElementById('app')
)
