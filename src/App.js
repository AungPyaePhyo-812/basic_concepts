
import { ThemeProvider } from 'styled-components';
import './App.css';
import CompoA from './components/CompoA';
import CompoB from './components/CompoB';
import GlobalStyle from './styles/GlobalStyle';

const theme = {
  colors: {
    primary : "blue",
    secondary : "red",
    accent : "hotpink"
  },

  fonts: {
    h1size : "55px",
    h2size : "40px"
  }
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
          <GlobalStyle />
          <CompoA />
          <CompoB />
      </div>
    </ThemeProvider>
  );
}

export default App;
