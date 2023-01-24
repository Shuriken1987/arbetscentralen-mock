import arronImg from "../../images/Matt_Aaron_CFP.png"
import bgImg from "../../images/abstract-blur-and-working-space-at-home-photo.jpg"
import "./heroStyle.css";
// import "./hero.scss"

import {FaArrowCircleRight, FaQuoteLeft} from "react-icons/fa";

const Hero = () => {

    const bgStyle = {
        backgroundImage: `url(${bgImg})`
    }

    return (
        <>
            <div className="hero-home">
                <div className="hero-home-bg">
                    <div className="hero-home-bg-left">
                        <div className="hero-home-bg-left-slant">

                        </div>
                    </div>
                    <div className="hero-home-bg-right" style={bgStyle}>

                    </div>
                </div>
                <div className="hero-home-inner">
                    <div className="hero-home-left">
                        <div className="hero-home-left-content">
                            <h1 className="h1 hero-home-left-content">LÅSAR UPP MÖJLIGHETER FÖR ARBETSSÖKARE OCH
                                ARBETSGIVARE</h1>
                            <div className="-gray-dark hero-home-left-text wysiwyg-content">
                                <p>ArbetsCentralen är ett snabbt växande HR-företag i Sverige, engagerat i att koppla
                                    samman
                                    arbetssökande med de bästa jobbmöjligheterna och företag med den mest lämpliga
                                    talangen
                                    för ömsesidig tillväxt och framgång.</p>
                            </div>
                            <div className="hero-home-links">
                                <a className="-caps -arrow-after hero-cta"><span>HIRED NOW</span>  <FaArrowCircleRight/></a>
                                <a className="-caps -arrow-after hero-cta"><span>FIND THE RIGHT TALENT</span> <FaArrowCircleRight/></a>
                            </div>
                        </div>

                    </div>
                    <div className="hero-home-right" style={bgStyle}>
                        <div className="hero-home-right-quote">
                            <FaQuoteLeft/>
                            <p className="-gray-dark -quote hero-home-right-quote-text"> ArbetsCentralen helped me find my
                                dream job as an IT project manager in my hometown.</p>
                            <div className="hero-home-right-quote-citation">
                                <p>"Aronn O., It manager"</p>
                            </div>
                        </div>
                        <div className="hero-home-right-headshot">
                            <img className="hero-home-right-headshot-img" src={arronImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero;