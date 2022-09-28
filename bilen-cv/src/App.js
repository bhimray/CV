import logo from './logo.svg';
import './App.css';
import Head from './components/Head/Head';
import Links from './components/Links/Links';
import Goal from './components/Goal/Goal';
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';
import Schooling from './components/Schooling/Schooling';
import Pdf from './components/Pdf/Pdf';
import React from 'react';
import ReactToPdf from 'react-to-pdf'
const ref = React.createRef();
// const [pdf, printPdf] = React.useState(false)
const options = {
  orientation: 'portrait',
  unit: 'in',
  format: [4,4]
};

function App() {
  return (
    <div className="App">
      <div ref={ref}>
        <Head/>
        <Links/>
        <Goal/>
        <Skill/>
        <Project/>
        <Schooling/>
      </div>
     {/* <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} x={8.5} y={11.5} >
        {({toPdf}) => (
          <button onClick={toPdf}>Generate pdf</button>
        )}
      </ReactToPdf> */}
      {/* <Pdf/> */}
    </div>
  );
}

export default App;
