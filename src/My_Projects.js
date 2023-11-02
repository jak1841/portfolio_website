import './My_Projects.css';
import github_logo from './images/iconmonstr-github-1.svg'
import youtube_logo from './images/icons8-youtube.svg'


export const My_project = () => {
    return (
        <div id="root_my_project_container">
            <Project/>
            <Project/>
            <Project/>
        </div>
    );
}

// Creates all the divs if 
const Project = () => {
    return (
        <div className="project_container">
            <div className="project_text_and_link_container">
                <p className="project_name">Project Name</p>
                <p className="made_with">Made with: Languages</p>
                <p className="project_description">Description-----------------------------------------------------------
                -------------------------------------------------------------------------------------------------------
                -----------------------------------------------------------------------------------------------------
                --------------------------------------------------------------------------------</p>
                <div className="root_links_container">
                    <button className='link_buttons'>
                            <img src={github_logo}></img>
                            <p>Github</p>
                    </button>

                    <button className='link_buttons'>
                            <img className="youtube_icon" src={youtube_logo}></img>
                            <p>Demo</p>
                    </button>
                </div>
            </div>
            <div className="project_image_container">
                <img alt="Project Image"></img>
            </div>
            

        </div>
    );
}