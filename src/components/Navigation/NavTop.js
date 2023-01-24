// import {useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {Link, useNavigate} from "react-router-dom";
// import {routeConfig} from "../../config/routeConfig";
// import {setUser} from "../../redux/userSlice";
import logoImg from "../../images/download_3.jpg"


import {
    FaPhoneAlt, FaMailBulk, FaSearch, FaUserAlt, FaSignInAlt, FaYoutube, FaInstagram, FaFacebook,
} from "react-icons/fa";

// import ShopCart from "../ShopCart/ShopCart";


function NavTop() {
    // const {user} = useSelector((state) => state.userStore);
    // const [search, setSearch] = useState("");
    // const navigate = useNavigate();
    // const dispatch = useDispatch();


    // const onSearch = e => {
    //     e.preventDefault();
    //     setSearch(e.target.value);
    // };
    //
    // const goToShop = e => {
    //     e.preventDefault();
    //     search.length > 0 && navigate(`${routeConfig.SHOP.url}?search=${search}`);
    // }
    //
    // const test = e => {
    //     if (e.keyCode === 13) {
    //         goToShop(e);
    //     }
    // }
    //
    const logOut = () => {
        localStorage.removeItem("user");
        // dispatch(setUser({}));
        // navigate("/auth");
    };

    const userBtnLayout = () => {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle user"
                   href="/"
                   id="navbarDropdown"
                   role="button"
                   data-bs-toggle="dropdown"
                   aria-expanded="false"
                >
                    My ArbetsCentralen <FaUserAlt/>
                </a>
                <ul className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                >
                    <li>
                        <a href="#"
                           className="dropdown-item user-dropdown"
                        >
                            <i className="bi bi-person-workspace me-2"></i>
                            Profile
                        </a>
                    </li>
                    {/*<li>*/}
                    {/*<a href="#"*/}
                    {/*      className="dropdown-item user-dropdown">*/}
                    {/*    <i className="bi bi-box me-2"></i>*/}
                    {/*    My orders*/}
                    {/*</a>*/}
                    {/*</li>*/}
                    {/*{user.isAdmin === "true" && <li>*/}
                    {/*    <Link to={routeConfig.DASHBOARD.url} className="dropdown-item">*/}
                    {/*        <i className="bi bi-card-list me-2"></i>*/}
                    {/*        Dashboard*/}
                    {/*    </Link>*/}
                    {/*</li>}*/}
                    <li onClick={logOut}>
                        <a href="#" className="dropdown-item">
                            <i className="bi bi-box-arrow-right me-2"></i>
                            Logout
                        </a>
                    </li>
                </ul>
            </li>)

        // <li className="nav-item">
        //     <Link to="/auth" className="nav-link">
        //         <FaSignInAlt/>
        //     </Link>
        // </li>

    };

    return (
        <>
            <div className="nav-bar-wrapper container-fluid">
                <a href="#" className="navbar-brand border-">
                    <img src={logoImg} className="logo-img" alt=""/>
                </a>
                 <div className=" ti">
                    <li className="nav-item dropdown first">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                            Search jobs <FaSearch/>
                        </a>
                        <ul className="dropdown-menu">
                            <p>Find a jobb</p>
                            <li>
                                <input type="text" placeholder="Search by job type, industry, or skill"/>
                            </li>
                            <li>
                                <input type="text" placeholder="Search by city, region, or postal code"/>
                            </li>
                            <button>Find</button>
                        </ul>
                    </li>
                    {userBtnLayout()}
            </div>
            </div>

        </>
    );
}

export default NavTop;
