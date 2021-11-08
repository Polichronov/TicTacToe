import React from 'react'
import ReactDOM from 'react-dom'
import { DarkTheme, BaseProvider } from 'baseui';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import './index.css'
import App from './App'

const engine = new Styletron();


ReactDOM.render(
  <React.StrictMode>
     <StyletronProvider value={engine}>
           <BaseProvider theme={DarkTheme}>
            <App />
        </BaseProvider>
      </StyletronProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
