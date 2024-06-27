import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Maincontent from './components/Maincontent.jsx';
import { BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Maincontent />
      </Router>
     

    </>
  );
}

export default App;
