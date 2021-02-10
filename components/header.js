import Link from "next/link";
import {gsap} from "gsap";


const Header = () => {
    let tl = gsap.timeline()

    tl.fromTo('.hero-slogan', {
        x: -200,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1.3
    })
    .fromTo('.subtext', {
        x: -200,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1.3
    },
    "<0.5"   
    )  
    .fromTo('#input-email', {
        x: -200,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1.3
    },
    "<0.5"   
    ).fromTo('.email-btn', {
        x: -200,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1.3
    },
    "<0.5"   
    ) 

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div className="container">
                <Link href="#">
                    <a className="navbar-brand">87Lux</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="nav-links collapse navbar-collapse" id="navbarLinks">
                    <div className="navbar-nav ml-auto">
                        <Link href="#">
                            <a className="nav-link">Themes</a>
                        </Link>
                        <Link href="#">
                            <a className="nav-link">Apps</a>
                        </Link>
                        <Link href="#">
                            <a className="nav-link">Assets</a>
                        </Link>
                        <Link href="#">
                            <a className="nav-link">Contact Us</a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
  
export default Header;