import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Home from './Component/Home'
import OpeningHours from './Component/OpeningHours'
import styled from '@emotion/styled'


function App() {

  const Nav = styled.nav`
  border-bottom: 1px solid black;
  margin-bottom: 50px;
`
  const Li = styled.li`
  display: inline-block;
  margin-left: 30px;
  color: red;
  font-weight: bold;
 

`
  const Ol = styled.ol`
  list-style-type: none;
  padding-left: 0;
  `



  return (
    <div className="App">
     
      <BrowserRouter>
      <Nav >
          <Ol>
            <Li class="crumb">
              <Link to="/home">Home</Link>
            </Li>
            <Li class="crumb">
              <Link to="/openingHours">OpeningHours</Link>
            </Li>
          </Ol>
        </Nav>
                <Switch>
                    <Route path="/home" component={Home}   />
                    <Route path="/openingHours" component={OpeningHours}  />
                  
                </Switch>
           </BrowserRouter>

    </div>
  );
}

export default App;
