import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Maincontent from './components/Maincontent.jsx';
import { BrowserRouter as Router} from 'react-router-dom';
// import AddtoCart from './components/AddtoCart.jsx';
function App() {
  return (
    <>
      <Router>
        <Maincontent />
        {/* <AddtoCart/> */}
      </Router>
     

    </>
  );
}

export default App;
