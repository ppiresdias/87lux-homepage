// import Header from "../components/header";

const Jumbo = () => {
    return (
        //  TOP CONTAINER
        <div className="container jumbo-container">
            {/* HERO VIEW */}
            <div className="row hero-section">
                <div className="col-sm left__side">
                    <div className="row info">
                        <h1 className="hero-slogan">
                            We give your business an edge over your competitors!
                        </h1>
                        <p className="subtext">
                            Everything you need for your business: Themes, Apps, Assets, and More..
                        </p>
                    </div>
                    <div className="row email-input-field">
                        <div className="form-group">
                            <input type="email" className="form-control" id="input-email" aria-describedby="emailHelp" placeholder="  Enter your email address"/>
                        </div>
                    </div>
                    <div className="row email-btn">
                        <button type="button" className="btn btn-primary" id="jumbo-btn">Get started</button>
                    </div>
                </div>
            
                {/* HERO IMAGE */}
                <div className="col-sm right__side">
                    <div className="green__circle"></div>
                    <div className="blue__circle"></div>
                    <div className="triangle"></div>
                    <div className="rect__video">
                        <button type="button" className="btn btn-primary">
                            <i className="fa fa-play"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default Jumbo;