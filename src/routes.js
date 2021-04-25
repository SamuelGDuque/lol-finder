import { BrowserRouter, Switch, Route} from 'react-router-dom';
import React, { useState } from 'react'
import Home from './pages/home/index.jsx';
import ChampionInterna from './pages/championInterna/index.jsx';
import Champions from './pages/champions/index.jsx';
import Header from './components/header';
import { lightTheme, darkTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'

export default function Routes() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/champions" exact component={Champions}/>
          <Route path="/champions/:id" exact component={ChampionInterna}/>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}
