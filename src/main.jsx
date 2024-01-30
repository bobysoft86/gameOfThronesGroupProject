import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from './Context/Context.jsx'
import './i18jn';


ReactDOM.createRoot(document.getElementById('root')).render(
<ApiProvider>
  <App />
</ApiProvider>
)
