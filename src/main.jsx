import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from './SimpleBootstarpWebsite/App';
import App from './layoutSetupAdminUser/App';
import { Provider } from 'react-redux';
import store from './layoutSetupAdminUser/redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
