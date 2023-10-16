import './App.css';
import Main from './components/Main.js'; 
import Layout from './components/Layout.js'; 
import ProjectList from './components/ProjectList.js';
import ProjectForm from './components/ProjectForm.js';
import About from './components/About.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import { useState, createContext} from 'react'

export const ProjectContext = createContext()


function App() {

  let myArray = [{"id": 1, "title": "Mini-Project", "description": "Build a birdhouse"},
{"id": 2, "title": "Medium-Project", "description": "Build a Doghouse"}]
const [projects, setProjects] = useState(myArray);

fetch('api/projects', {
  method: "GET",
})
  .then((response) => {
      return response.json();
  })
  .then((resp) => {
      console.log('something is returned....');
      console.log(resp)
      setProjects(resp)
  })
  .catch((err) => {
      // Code called when an error occurs during the request
      console.log(err.message);
  });

  return (
    <ProjectContext.Provider value={{projects, setProjects}}>
    <Router>
    <div className="App">
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/list" element={<ProjectList />}></Route>
        <Route path="/project/:pid" element={<ProjectForm />}></Route>
        <Route path="/project/" element={<ProjectForm />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Main />}></Route>
      </Route>
     </Routes>
    </div>
    </Router>
    </ProjectContext.Provider>
  );
}

export default App;
