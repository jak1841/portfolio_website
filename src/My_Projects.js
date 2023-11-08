import './My_Projects.css';
import github_logo from './images/iconmonstr-github-1.svg';
import youtube_logo from './images/icons8-youtube.svg';
import connect4_logo from './images/Connect4_game.png';


export const My_project = () => {
    const project_connect_4 = {
        name: "Online Connect4 Game", 
        madewith: "Java, Maven, JavaFX", 
        desc: `Designed a Connect4 turn based style game that allows users to play online against each other.
        Set up a multithreaded server using sockets which can handle multiple clients.
        Planned the GUI and Backend with Wireframe and UML Modeling respectively.
        Incorporated unit tests using JUnit to make sure rules and winning conditions work properly.`, 
        image: connect4_logo, 
        github_link: "https://github.com/jak1841/Connect4_Server_client", 
        youtube_link: "https://www.youtube.com/watch?v=OXrHJn6Q_HI", 
    }
    return (
        <div id="root_my_project_container">
            <Project proj={project_connect_4}/>
            
        </div>
    );
}

// Creates all the divs if 
const Project = ({proj}) => {
    return (
        <div className="project_container">
            <div className="project_text_and_link_container">
                <p className="project_name">{proj.name}</p>
                <p className="made_with">Made with: {proj.madewith}</p>
                <p className="project_description">{proj.desc}</p>
                <div className="root_links_container">
                    <a style={{ textDecoration: 'none' }} href={proj.github_link} target='_blank'> 
                        <button className='link_buttons'>
                                    <img src={github_logo}></img>
                                    <p>Github</p>
                            </button>
                    </a>
                    <a style={{ textDecoration: 'none' }} href={proj.youtube_link} target='_blank'> 
                        <button className='link_buttons'>
                                <img className="youtube_icon" src={youtube_logo}></img>
                                <p>Demo</p>
                        </button>
                    </a>
                </div>
            </div>
            <div className="project_image_container">
                <img src={proj.image} className="project_image"alt="Project Image"></img>
            </div> 
            

        </div>
    );
}