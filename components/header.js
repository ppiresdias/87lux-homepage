import Link from "next/link";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md fixed-top navbar-light bg-light">
            <Link href="#">
                <a className="navbar-brand">87Lux</a>
            </Link>

            <div className="nav-links">
                <ul className="nav">
                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link active">Themes</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Apps</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Assets</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Contact Us</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
  
export default Header;