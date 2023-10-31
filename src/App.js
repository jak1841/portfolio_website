import './App.css';
import UIC_LOGO from './images/UIC_LOGO.svg';

export const About_Me = () => {

    return (
        <div id="about_me_container">
            <div>
                <h2>Summary</h2>
                <Summary/>
            </div>
            
            <div>
                <h2>My Education</h2>
                <Education/>
            </div>
            
        </div>
    );

}

const Summary = () => {
    return (
        <div className='about_me_little_containers'>
            
        </div>
    );
}

const Education = () => {
    return(
        <div className='about_me_little_containers'>
            <img src={UIC_LOGO} alt="UIC LOGO" id='School_logo'></img>
            <p1 id="university_name">University of Illinois at Chicago</p1>
            <div id="School_info_container">
                <p1 className="School_information">Bachelors of Science in Computer Science</p1>
                <br></br>
                <p1 className="School_information">GPA: 3.88/4.00</p1>
                <br></br>
                <p1 className="School_information">Deans List 2021, 2022, 2023</p1>
                <br></br>
                <p1 className="School_information">Expected Graduation: May 2024</p1>
            </div>
        </div>
    );

}