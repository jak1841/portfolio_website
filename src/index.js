import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {About_Me} from './About_Me.js'
import { My_project } from './My_Projects.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Overall_structure = () => {
  return (<div>
    <h1>About Me</h1>
    <About_Me/>

    <h1>My Projects</h1>
    <My_project/>

    <h1>My Experience</h1>

    <h1>My Skills</h1>
    

  </div>);
}

root.render(
  <React.StrictMode>
    <Overall_structure/>
    
  </React.StrictMode>
);

