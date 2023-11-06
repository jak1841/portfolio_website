import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {About_Me} from './About_Me.js';
import { My_project } from './My_Projects.js';
import {My_experience} from './My_experience.js';

import {My_skills} from './My_skills.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Overall_structure = () => {
  return (<div>
    <h1>About Me</h1>
    <About_Me/>

    <h1>My Projects</h1>
    <My_project/>

    <h1>My Experience</h1>
    <My_experience/>

    <h1>My Skills</h1>
    <My_skills/>
    

  </div>);
}

root.render(
  <React.StrictMode>
    <Overall_structure/>
  </React.StrictMode>
);

