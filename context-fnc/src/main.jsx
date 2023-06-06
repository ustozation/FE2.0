import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider value={{ text: 'Hello FE2.0' }}>
		<App />
	</AuthProvider>
);
