import "./whyUsStyle.scss";
import image from "../../images/unnamed.png";
// import {Link} from "react-router-dom";
// import {routeConfig} from "../../config/routeConfig";

function WhoWeAre() {

    return (
        <>
            <div className="fun-facts">
                <div className="container">
                    <div className="more-info-content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="left-image">
                                    <img src={image} className="img-fluid" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-6 align-self-center">
                                <div className="right-content">
                                    <span>FIND OUT WHAT SETS US APART FROM THE REST</span>
                                    <h2>EXPLORE THE ADVANTAGES OF CHOOSING <em>OUR COMPANY</em></h2>
                                    <p>Discover why we're the best choice for your needs. Learn about the advantages and benefits of choosing our company.</p>
                                    <a to="/" className="filled-button">SUCCEED WITH US</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhoWeAre;