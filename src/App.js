import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/ProjectPage';
import Contact from './components/ContactPage';


function App() {
  return (
    <div className="App">
<Router>
      <div>
        <Navigation />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
