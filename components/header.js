
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <a className="navbar-brand" href="#">87Lux</a>

            <div className="nav-links">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Themes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Apps</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
  
export default Header;