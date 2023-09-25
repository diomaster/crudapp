import './App.css';
import Main from './components/Main.js'
import Layout from './components/Layout.js'
import ProjectList from './components/ProjectList.js'
import About from './components/about.js'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 



function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/list" element={<ProjectList />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Main />}></Route>
      </Route>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
