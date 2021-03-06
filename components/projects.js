
import Image from "next/image";

const Projects = () => {
    return (
        <>
            <div className="wrapper container" id="projects-section">
                <div className="projects-container container">
                    <div className="background__strip align-items-center">
                        <div className="align__left">
                            <p className="vertical_text">latest projects</p>
                        </div>  
                    </div>
                </div>
                <div className="overlay">
                    <div className="row">
                        <div className="">
                            <div className="project-field project-1"></div>
                        </div>
                        <div className="">
                            <div className="project-field project-2"></div>
                        </div>
                        <div className="">
                            <div className="project-field project-3"></div>
                        </div>
                    </div>
                </div>
                <div className="trigger-team-animation"></div>
            </div>
            <div className="row view-btns">
                <button type="button" className="btn col" id="view-themes-btn">view themes</button>
                <button type="button" className="btn col" id="view-apps-btn">view apps</button>
            </div>
         </>
    );
};
  
export default Projects;