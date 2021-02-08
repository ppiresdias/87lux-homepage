// import Header from "../components/header";

const Jumbo = () => {
    return (
        //  TOP CONTAINER
        <div className="container-md jumbo-container">
            {/* HERO VIEW */}
            <div className="row hero-section">
                <div className="col left__side">
                    <div className="row info">
                        <h1 className="hero-slogan">
                            We give your business an edge over your competitors!
                        </h1>
                        <p className="subtext">
                            Everything you need for your business: Themes, Apps, Assets, and More..
                        </p>
                    </div>
                    <div className="row email-input-field">
                        <div class="form-group">
                            <input type="email" className="form-control" id="input-email" aria-describedby="emailHelp" placeholder="  Enter your email address"/>
                        </div>
                    </div>
                    <div className="row email-btn">
                        <button type="button" className="btn btn-primary">Get started</button>
                    </div>
                </div>
                <div className="col right__side">
                    Shapes
                </div>
            </div>
        </div>
    );
};
  
export default Jumbo;