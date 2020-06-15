import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { muiTheme } from 'theme'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={muiTheme}>
    <App />
  </ThemeProvider>, document.getElementById('root'))
