
import Sidebar from './Components/Sidebar';
import HomePage from './Pages/HomePage';
import styled from 'styled-components';

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
    <AppStyled>
    <Sidebar />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  background-color: red;
`;

export default App;
