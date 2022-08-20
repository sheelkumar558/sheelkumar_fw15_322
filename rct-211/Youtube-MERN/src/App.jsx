import React, { useState } from 'react'
import Navbar from "./Components/Navbar";
import styled, { ThemeProvider } from 'styled-components';
import Menu from './Components/Menu';
import { darkTheme, lightTheme } from './Utils/theme';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import VideoPage from './Pages/VideoPage';
const Container = styled.div`
display: flex;
`
const Main = styled.div`
flex: 7;
background: ${({ theme }) => theme.bg};
`
const Wrapper = styled.div`
padding: 22px 9px;
`
const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Switch>
              <Route exact path="/">
             <HomePage/>
              </Route>
              <Route path="/video">
             <VideoPage/>
              </Route>
              </Switch>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}

export default App