import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import App from './App';
import './index.css';
import store from './store/store';
import {Provider} from 'react-redux';
import AuthContext from './context/authContext';

ReactDOM.render(
   <StrictMode>
    <Provider store={store}>
      <AuthContext>
        <App />
      </AuthContext>
    </Provider>
   </StrictMode>
    ,
    document.getElementById('root')
)