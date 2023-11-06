import './My_experience.css';

import us_Cellular_logo from './images/uscellular_feature.jpg'
import UIC_LOGO from './images/UIC_LOGO.svg';


export const My_experience = () => {
    const experience_us_cellular = {
        date: "June 2023 - August 2023", 
        company_name: "US Cellular", 
        company_title: "Software Engineer Intern",
        description: `Created a Android Application and website that hosts tools which analyze Core Network Elements using Java, Kotlin, Bash, PHP, JavaScript, HTML and CSS.
        Developed scripts using Bash & ADB to remotely control android devices to aid in Network Automating testing`,
        company_logo: us_Cellular_logo
    };

    const experience_uic_gpip = {
        date: "June 2022 - August 2022", 
        company_name: "UIC GPIP", 
        company_title: "Android Developer Intern",
        description: `Constructed an Android app that allows users to retrieve weather information from different locations using Android Studio, Kotlin & Java.
        Integrated OpenWeatherMap APIs and HTTP Requests to get up to date weather data. Attached Google Map SDK to allow user to tap on location and get current weather data at that location`,
        company_logo: UIC_LOGO
    };

    const experience_uic_pap = {
        date: "June 2021 - August 2021", 
        company_name: "UIC PAP", 
        company_title: "Programming Researcher",
        description: `Compiled papers about common molecular structures within Persimmon Tannin/
        Produced 3D model of Persimmon Tannin with PyMol & Python in order to identify common structures in the molecule.
        Presented and shared the results of the model to current researchers in the field.`,
        company_logo: UIC_LOGO
    };
    
    return (
        <div id='root_My_experience_container'>
            <Experience exp={experience_us_cellular} />
            <Experience exp={experience_uic_gpip}/>
            <Experience exp={experience_uic_pap}/>
            
        </div>
    );
}

const Experience = ({exp}) => {
    return (
        <div className='experience_container'>
            <div className='experience_text_container'>
                <p className="date_experience">{exp.date}</p>
                <p className="company_name">{exp.company_name}</p>
                <p className="Company_title">{exp.company_title}</p>
                <p className="Experience_description">{exp.description}</p>
            </div>
            <div className="Company_Logo_container">
                <img className="company_image"src={exp.company_logo} alt="Company Logo"></img>
            </div>

            <div> 
                
            </div>
        </div>
    );
}