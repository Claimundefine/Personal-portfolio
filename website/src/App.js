
import Sidebar from './Components/Sidebar';
import HomePage from "./Pages/HomePage";
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';
import styled from 'styled-components';
import { Route, Switch as Switching } from "react-router";
import Switch from '@material-ui/core/Switch';

function App() {
  return (
    // <div className="App">
    //   <div className="sidebar">
    //     <NavBar />
    //   </div>
    //   <div className="main-content">
    //     <div className="content">
    //         <HomePage />
    //       </div>
    //     </div> 
    // </div>
    <div className="App">
      <Sidebar />

      <MainContentStyled>

      <Switching>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/about" exact>
        <AboutPage />
      </Route>
      <Route path="/portfolio" exact>
        <PortfolioPage />
      </Route>
      <Route path="/contact" exact>
        <ContactPage />
      </Route>
    </Switching>
      </MainContentStyled>
    </div>

  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
`;

export default App;
