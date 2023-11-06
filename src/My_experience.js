import './My_experience.css';

export const My_experience = () => {
    return (
        <div id='root_My_experience_container'>
            <Experience/>
            <Experience/>
            <Experience/>
        </div>
    );
}

const Experience = () => {
    return (
        <div className='experience_container'>
            <div className='experience_text_container'>
                <p className="date_experience">Dated</p>
                <p className="company_name">Company Name</p>
                <p className="Company_title">Company_role</p>
                <p className="Experience_description">Description-----------------------------------------------------------
                -------------------------------------------------------------------------------------------------------
                -----------------------------------------------------------------------------------------------------
                --------------------------------------------------------------------------------</p>
            </div>
            <div className="Company_Logo_container">
                <img alt="Company Logo"></img>
            </div>

            <div> 
                
            </div>
        </div>
    );
}