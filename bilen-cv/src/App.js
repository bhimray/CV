import logo from './logo.svg';
import './App.css';
import Head from './components/Head/Head';
import Links from './components/Links/Links';
import Goal from './components/Goal/Goal';
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';
import Schooling from './components/Schooling/Schooling';
function App() {
  return (
    <div className="App">
     <Head/>
     <Links/>
     <Goal/>
     <Skill/>
     <Project/>
     <Schooling/>
    </div>
  );
}

export default App;
