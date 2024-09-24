import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import { store } from './utils/Store';
import { DomainSearchTheme } from './utils/Theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={DomainSearchTheme}>
        <Layout />
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
