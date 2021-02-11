
const Solutions = () => {
    return (
        <>
            <div className="solutions-wrapper">
                <div className="container">
                    <div className="row" id="solutions-heading">
                        <h1>Need a custom solution?</h1>
                    </div>
                    <div className="row" id="solutions-list">
                        <div className="list-menu">
                            <div className="row solution-item active__item">
                                <span>01</span>install theme
                            </div>
                            <div className="row solution-item">
                                <span>02</span>landing page
                            </div>
                            <div className="row solution-item">
                                <span>03</span>build online store
                            </div>
                            <div className="row solution-item">
                                <span>04</span>custom theme
                            </div>
                            <div className="row solution-item">
                                <span>05</span>custom web site
                            </div>
                            <div className="row solution-item">
                                <span>06</span>custom app
                            </div>
                            <div className="row solution-item">
                                <span>07</span>marketing assets    
                            </div>
                        </div>
                        <div className="col-sm list-main" id="list-main">

                            <div className="row" id="hide">
                                <div className="col-4 info">
                                    <div className="row heading">
                                       <h5>install theme</h5>
                                    </div>
                                    <div className="description">
                                        <p>
                                            Having trouble with installing any of our themes? 
                                            Well we can help you by installing the theme for you!
                                        </p>
                                    </div>
                                </div>
                                <div className="col-8 img">
                                    <div className="row grey__space"></div>
                                    <div className="row">
                                        <div className="col left-img"></div>
                                        <div className="col right-img"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="row default__hidden mobile-info">
                                <div className="row heading">
                                    <h5>install theme</h5>
                                </div>
                                <div className="description">
                                    <p>
                                        Having trouble with installing any of our themes? 
                                        Well we can help you by installing the theme for you!
                                    </p>
                                </div>
                            </div>

                            <div className="row default__hidden mobile-img">
                                <div className="row right-img"> </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper-footer ">
                        <div className="center">
                            <div className="row" id="budget-text">We work with any budget!</div>
                            <button type="button" className="row btn" id="solutions-btn">Let's get started</button>
                        </div>

                    </div>
                    
                </div>
            </div>
            <div className="footer">

            </div>
         </>
    );
};
  
export default Solutions;