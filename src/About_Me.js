import './About_Me.css';
import UIC_LOGO from './images/UIC_LOGO.svg';
import Jaskarn_pic from './images/Jaskarn_Dhillon_picture.png'
import linkedIn_logo from './images/iconmonstr-linkedin-3.svg'
import github_logo from './images/iconmonstr-github-1.svg'
import gmail_logo from './images/Gmail_icon.svg'

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
            <div id="profile_pic_container">
                <img id="profile_pic" src={Jaskarn_pic} alt="Jaskarn Dhillon picture"></img>
            </div>
            <div id="summary_description_container">
                <p id="summary_description">Hello I am Jaskarn Dhillon. I am a aspiring Software Engineer and Mobile Application Developer. I Spend most of my time learning Math and programming. </p>
            </div>
            <div id="links_and_contact_info_container" >
                <a style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/jaskarn-dhillon16" target='_blank'>
                    <button className='about_me_buttons'>
                        <img src={linkedIn_logo}></img>
                        <p>LinkedIn</p>
                    </button>
                </a>
                
                <a style={{ textDecoration: 'none' }} href="https://github.com/jak1841" target='_blank'>
                    <button className='about_me_buttons'>
                        <img src={github_logo}></img>
                        <p>Github</p>
                    </button>
                </a>

                


            </div>

            
        </div>
    );
}

const Education = () => {
    return(
        <div className='about_me_little_containers'>
            <img src={UIC_LOGO} alt="UIC LOGO" id='School_logo'></img>
            <p id="university_name">University of Illinois at Chicago</p>
            <div id="School_info_container">
                <p className="School_information">Bachelors of Science in Computer Science <br></br> 
                Expected Graduation: May 2024 <br></br>
                Deans List: 2021, 2022, 2023 <br></br>
                GPA: 3.88/4.00 </p>
            </div>
        </div>
    );

}



