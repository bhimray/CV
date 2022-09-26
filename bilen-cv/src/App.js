import logo from './logo.svg';
import './App.css';
import Head from './components/Head/Head';
import Links from './components/Links/Links';
import Goal from './components/Goal/Goal';
import Skill from './components/Skill/Skill';
function App() {
  return (
    <div className="App">
     <Head/>
     <Links/>
     <Goal/>
     <Skill/>
    </div>
  );
}

export default App;
