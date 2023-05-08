import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import Content from './components/Content'
import SideBar from './components/SideBar';
import Header from './components/Header';

const theme = createTheme({
  palette: {
    text: {
      primary: '#42526E',
    },
    background: {
      default: "#F5F5F5"
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header/>
        <SideBar/>
        <Content/>
      </div>
    </ThemeProvider>
  );
}

export default App;