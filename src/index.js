import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

ReactDOM.render(
    <BrowserRouter>
        {/* depricated */}
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
        <App />
        </ThemeProvider>
        </BrowserRouter>,
        document.getElementById('root'));
