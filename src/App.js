import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from "@mui/material";

import './App.css';
import Content from './components/Content'
import SideBar from './components/SideBar';
import Header from './components/Header';
import { drawerWidth } from './constants';

const theme = createTheme({
  palette: {
    text: {
      primary: '#42526E',
      disabled: '#7F8898'
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
        <Container component="main"
          sx={{ 
            width: `calc(100% - ${drawerWidth}px)`, 
            ml: `${drawerWidth + 24}px`, 
            mt: '16px',
            mr: '32px',
            borderRadius: '8px', 
            backgroundColor: '#F5F5F5',
            boxShadow: 0}}>
            <Content/>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;