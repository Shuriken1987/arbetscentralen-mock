import logoImg from "../images/download_3.jpg"
const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="logo">
                    <img src={logoImg} className="logo-img" alt=""/>
                </div>
                {/*<img src={logoImg} className="logo-img" alt=""/>*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Hem</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Rusta och Matcha</a>
                        </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Arbetssökande</a>
                        </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Arbetsgivare</a>
                        </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Lediga jobb</a>
                        </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Om oss</a>
                        </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Kontakta oss</a>
                        </li>
                        {/*<li className="nav-item dropdown">*/}
                        {/*    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"*/}
                        {/*       aria-expanded="false">*/}
                        {/*        Dropdown*/}
                        {/*    </a>*/}
                        {/*    <ul className="dropdown-menu">*/}
                        {/*        <li><a className="dropdown-item" href="#">Action</a></li>*/}
                        {/*        <li><a className="dropdown-item" href="#">Another action</a></li>*/}
                        {/*        <li>*/}
                        {/*            /!*<hr className="dropdown-divider">*!/*/}
                        {/*        </li>*/}
                        {/*        <li><a className="dropdown-item" href="#">Something else here</a></li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link disabled">Disabled</a>*/}
                        {/*</li>*/}
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control" type="search" placeholder="Sök" aria-label="Search"/>
                            <button className="btn ja" type="submit">Sök</button>
                    </form>
                </div>
            </div>
        </nav>
)
}

export default Navbar;