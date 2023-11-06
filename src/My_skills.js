import './My_skills.css';
import react_logo from './images/react_logo.svg';
import kotlin_logo from './images/kotlin-1-logo-svgrepo-com.svg';
import html_logo from './images/html-5-logo-svgrepo-com.svg';
import css_logo from './images/css-3-logo-svgrepo-com.svg';
import php_logo from './images/java-svgrepo-com.svg';
import python_logo from './images/python-svgrepo-com.svg';
import javascript_logo from './images/javascript-logo-svgrepo-com.svg';
import java_logo from './images/java-svgrepo-com.svg';

export const My_skills = () => {
    return (
        <div id="root_My_skills_container">
            <div className='skills_container'> 
                <div className="skills_row">
                    <Skills_logo logo={react_logo} logo_name={"React"} />
                    <Skills_logo logo={kotlin_logo} logo_name={"Kotlin"} />
                    <Skills_logo logo={html_logo} logo_name={"HTML"} />
                    <Skills_logo logo={css_logo} logo_name={"CSS"} />
                </div>
                <div className="skills_row">
                    <Skills_logo logo={php_logo} logo_name={"Php"} />
                    <Skills_logo logo={python_logo} logo_name={"Python"} />
                    <Skills_logo logo={javascript_logo} logo_name={"JavaScript"} />
                    <Skills_logo logo={java_logo} logo_name={"Java"} />
                </div>
            </div>
        </div>
    );
}

const Skills_logo = ({logo, logo_name}) => {
    return (
        <div className="skills_cell">
            <img className="skills_logo" src={logo}></img>
            <p1 className="skills_name">{logo_name}</p1>
        </div>
    );
}

