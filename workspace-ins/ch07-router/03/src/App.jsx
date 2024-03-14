import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

function App(){
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/page1" element={ <Page1 /> } />
        <Route path="/page2" element={ <Page2 /> } />
      </Routes>
    </Router>
  );
}

export default App;