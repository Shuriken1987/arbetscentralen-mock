import "./ourPartnersStyle.css"

import {FaArrowCircleRight} from "react-icons/fa";
import Slider from "./Slider";
// import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/horizontal.css';




const OurPartners = () => {

    return (
        <>
            <div className="fifty-fifty-stats" data-background="white">
                <div className="fifty-fifty-stats-inner">
                    <div className="fifty-fifty-stats-intro">

                        <div className="eyebrow fifty-fifty-stats-eyebrow">DISCOVER OUR INDUSTRY-LEADING PARTNERS</div>

                        <h2 className="h2 -gray-dark fifty-fifty-stats-title">OUR PARTNERSHIPS: POWERING YOUR JOB SEARCH
                            AND BUSINESS GROWTH
                        </h2>
                        <div className="fifty-fifty-stats-text wysiwyg-content">
                            <p>Transform your job search and skyrocket your career with ArbetsCentralen's strategic
                                partnerships. We've teamed up with top companies to provide a win-win solution for job
                                seekers and employers alike. Exclusive job opportunities, career-boosting resources, and
                                unparalleled access to industry leaders are just the beginning. Partnering with us means
                                that both job seekers and employers are getting the best of the best. Discover the
                                difference our partnerships can make for your career, and how you can become a valuable
                                asset to our partners.</p>
                        </div>

                        <a className="-caps -arrow-after fifty-fifty-stats-cta" href="/initiatives">
                            <span>PARTNER WITH THE BEST</span> <FaArrowCircleRight/>
                        </a>
                    </div>
                    <div className="fifty-fifty-stats-container">
                        {/*<div className="fifty-fifty-stats-container-inner">*/}
                        {/*      <div className="fifty-fifty-stats-item -image-block">*/}
                        {/*        <img alt="" className="fifty-fifty-stats-item-img" src={partner2}/>*/}
                        {/*    </div>*/}

                        {/*    <div className="fifty-fifty-stats-item -image-block">*/}
                        {/*        <img alt="" className="fifty-fifty-stats-item-img" src={partner1}/>*/}
                        {/*    </div>*/}

                        {/*     <div className="fifty-fifty-stats-item -image-block">*/}
                        {/*        <img alt="" className="fifty-fifty-stats-item-img" src={partner3}/>*/}
                        {/*    </div>*/}

                        {/*    <div className="fifty-fifty-stats-item -image-block">*/}
                        {/*        <img alt="" className="fifty-fifty-stats-item-img" src={partner5}/>*/}
                        {/*    </div>*/}

                        {/*     <div className="fifty-fifty-stats-item -image-block">*/}
                        {/*        <img alt="" className="fifty-fifty-stats-item-img" src={partner4}/>*/}
                        {/*    </div>*/}
                        {/*    <div className="fifty-fifty-stats-item -image-block">*/}
                        {/*        <img alt="" className="fifty-fifty-stats-item-img" src={partner6}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<Slider autoplay={2000} >*/}
                        {/*    <img src={partner1} alt="" />*/}
                        {/*    <img src={partner2} alt="" />*/}
                        {/*    <img src={partner3} alt=""/>*/}
                        {/*</Slider>*/}

                        <Slider/>

                    </div>
                </div>
            </div>

        </>
    )
}
export default OurPartners;