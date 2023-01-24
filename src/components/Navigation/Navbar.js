// import logoImg from "../../images/download_3.jpg"
const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                {/*<div className="logo">*/}
                {/*    <img src={logoImg} className="logo-img" alt=""/>*/}
                {/*</div>*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 proba">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Rusta och Matcha</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                För jobbsökande
                            </a>
                            <ul className="dropdown-menu my-menu">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6 className="dropdown-headline">Career SOLUTIONS</h6>
                                        <p className="dropdown-list">Search available jobs</p>
                                        <p className="dropdown-list">Submit your CV*</p>
                                        <p className="dropdown-list">Rusta och Matcha</p>
                                        <p className="dropdown-list">Work as a Consultant</p>
                                        <p className="dropdown-list">Train and Develop</p>
                                        <p className="dropdown-list">Study and Work</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className="dropdown-headline">CAREER RESOURCES</h6>
                                        <p className="dropdown-list">Rusta och Matcha Guide</p>
                                        <p className="dropdown-list">CV and Cover Letter</p>
                                        <p className="dropdown-list">Interview Preparation</p>
                                        <p className="dropdown-list">Work-life Balance</p>
                                        <p className="dropdown-list">Salary and Negotiation</p>
                                    </div>
                                </div>
                                <h6 className="dropdown-headline"> Create a Job Alert* </h6>
                                <h6 className="dropdown-headline">Why choose us?</h6>
                                <h6 className="dropdown-headline">FAQ</h6>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                               För arbetsgivare
                            </a>
                            <ul className="dropdown-menu my-menu">
                                <li className="row">
                                    <div className="col-md-6">
                                        <h6 className="dropdown-headline"> BUSINESS SOLUTIONS</h6>
                                        <p className="dropdown-list">Search available candidates</p>
                                        <p className="dropdown-list">Submit a vacancy* </p>
                                        <p className="dropdown-list">Consulting</p>
                                        <p className="dropdown-list">Recruiting</p>
                                        <p className="dropdown-list">Staffing</p>
                                        <p className="dropdown-list">Interim</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className="dropdown-headline">MANAGEMENT SOLUTIONS</h6>
                                        <p className="dropdown-list">Search managers</p>
                                        <p className="dropdown-list">Management Recruitment</p>
                                        <p className="dropdown-list">Management Training</p>
                                    </div>
                                </li>
                                <h6 className="dropdown-headline">Create a Candidate Alert*</h6>
                                <h6 className="dropdown-headline">FAQ</h6>
                                <h6 className="dropdown-headline">Employee Cost Calculator* </h6>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Resurser
                            </a>
                            <ul className="dropdown-menu my-menu">
                                <li className="row">
                                    <div className="col-md-6">
                                        <h6 className="dropdown-headline">BUSINESS RESOURCES</h6>
                                        <p className="dropdown-list">Workforce Management</p>
                                        <p className="dropdown-list">Compliance with Swedish labor laws and
                                            regulations </p>
                                        <p className="dropdown-list">Employee engagement and well-being</p>
                                        <p className="dropdown-list">Remote work and flexible working arrangements</p>
                                        <p className="dropdown-list">Talent acquisition and retention strategies</p>
                                        <p className="dropdown-list">Employee Cost Calculator* </p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className="dropdown-headline">CAREER RESOURCES</h6>
                                        <p className="dropdown-list">Rusta och Matcha Guide</p>
                                        <p className="dropdown-list">CV and Cover Letter</p>
                                        <p className="dropdown-list">Interview Preparation</p>
                                        <p className="dropdown-list">Work-life Balance</p>
                                        <p className="dropdown-list">Salary and Negotiation</p>
                                        <p className="dropdown-list">Salary Calculator*</p>
                                    </div>
                                </li>
                                <h6 className="dropdown-headline">FAQ</h6>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Om oss
                            </a>
                            <ul className="dropdown-menu my-menu about-dropdown">
                                <h6 className="dropdown-headline"> ABOUT THE COMPANY</h6>
                                <p className="dropdown-list">ArbetsCentralen Sverige AB</p>
                                <p className="dropdown-list">Meet the team </p>
                                <p className="dropdown-list">Find our offices</p>
                                <h6 className="dropdown-headline">Our Partners</h6>
                                <h6 className="dropdown-headline">Careers</h6>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link contact-us-link" href="#">Kontakta oss</a>
                        </li>


                        {/*  <li className="nav-item">*/}
                        {/*    <a className="nav-link" href="#">Arbetssökande</a>*/}
                        {/*</li>*/}
                        {/*  <li className="nav-item">*/}
                        {/*    <a className="nav-link" href="#">Arbetsgivare</a>*/}
                        {/*</li>*/}
                        {/*  <li className="nav-item">*/}
                        {/*    <a className="nav-link" href="#">Lediga jobb</a>*/}
                        {/*</li>*/}
                        {/*  <li className="nav-item">*/}
                        {/*    <a className="nav-link" href="#">Om oss</a>*/}
                        {/*</li>*/}
                        {/*  <li className="nav-item">*/}
                        {/*    <a className="nav-link contact-us-link" href="#">Kontakta oss</a>*/}
                        {/*</li>*/}
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
                </div>
            </div>
        </nav>
    )
}

export default Navbar;