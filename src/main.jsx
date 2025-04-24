import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from './SimpleBootstarpWebsite/App';
//import App from './layoutSetupAdminUser/App';
//import App from './Blog/App';
import App from './TypeaheadSearch/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
