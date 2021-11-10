import React from 'react'
import ReactDOM from 'react-dom'
import { LightTheme, BaseProvider } from 'baseui';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { Provider as ReduxProvider} from 'react-redux';
import { store } from './app/store';
import './index.css'
import App from './App'


const engine = new Styletron();


ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
     <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
           <App />
        </BaseProvider>
      </StyletronProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
