import "./promoStyle.css"
// import img1 from "../../images/Matt_Aaron_CFP.png"
import img2 from "../../images/unnamed.png"
// import img3 from "../../images/services3.png"


const PromoResources = () => {

    const bgStyle = {
        backgroundImage: `url(${img2})`
    }
    return (
        <>
            <div className="promo-double">
                <div className="promo-double-inner">
                    <div className="promo-double-intro">
                        <h2 className="h2 -center promo-double-title text-center">ACHIEVE SUCCESS: DISCOVER OUR
                            RESOURCES</h2>
                        <div className="-center -gray-dark wysiwyg-content">
                            <p>Whether you're a job seeker looking to take the next step in your career or an employer
                                looking to build a strong, talented team, our resources are here to help. We offer a
                                wealth of information and tools to help you navigate the job market and find the right
                                opportunities.
                            </p>
                        </div>
                    </div>

                    <div className="promo-double-container">
                        <a className="promo-double-item -link " href="/career-and-growth/market-yourself">
                            <div className="promo-double-item-image">
                                <div className="promo-double-item-image-inner" style={bgStyle}>
                                    <span className="sr-text"></span>
                                </div>
                            </div>
                            <div className="promo-double-item-content">
                                <div className="h4 promo-double-item-title">PREPARE FOR THE JOB INTERVIEW</div>
                                <div className="promo-double-item-text wysiwyg-content">
                                    <p> Ace your next interview with our expert guide on interview preparation. From
                                        researching the company to answering tough questions, our guide covers
                                        everything you need to know to make a great impression. Learn how to showcase
                                        your skills and experience, and how to stand out from the competition. Don't go
                                        into your next interview without reading this valuable resource.
                                    </p>
                                </div>
                            </div>
                            <span className="item-edit-frame"></span>

                        </a>
                        <a className="promo-double-item -link " href="/career-and-growth/career-center">
                            <div className="promo-double-item-image">
                                <div className="promo-double-item-image-inner" style={bgStyle}>
                                    <span className="sr-text"></span>
                                </div>
                            </div>
                            <div className="promo-double-item-content">
                                <div className="h4 promo-double-item-title">ELEVATE EMPLOYEE WELL-BEING AND ENGAGEMENT
                                </div>
                                <div className="promo-double-item-text wysiwyg-content">
                                    <p>As an employer, it's crucial to understand the impact that employee engagement
                                        and well-being have on your business's overall success. A happy and healthy
                                        workforce leads to increased productivity, retention, and overall job
                                        satisfaction. Our resources on employee engagement and well-being provide
                                        practical advice and strategies to help you create a positive work culture and
                                        improve the overall well-being of your employees.
                                    </p>
                                </div>
                            </div>
                            <span className="item-edit-frame"></span>
                        </a>
                    </div>
                </div>
            </div>

            {/*<section className="resources container">*/}
            {/*    <div className="promo-double-intro">*/}
            {/*        <h2 className="h2 -center promo-double-title text-center">ACHIEVE SUCCESS: DISCOVER OUR*/}
            {/*            RESOURCES</h2>*/}
            {/*        <div className="-center -gray-dark wysiwyg-content">*/}
            {/*            <p>Whether you're a job seeker looking to take the next step in your career or an employer*/}
            {/*                looking to build a strong, talented team, our resources are here to help. We offer a wealth*/}
            {/*                of information and tools to help you navigate the job market and find the right*/}
            {/*                opportunities.</p>*/}
            {/*            /!*<button>EXPLORE ALL</button>*!/*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-md-6">*/}
            {/*            <div className="card text-center">*/}
            {/*                <div className="holder">*/}
            {/*                    <img className="card-img-top" src="./img/about1.jpg" alt=""/>*/}
            {/*                </div>*/}
            {/*                <div className="card-body">*/}
            {/*                    <h4>JavaScript</h4>*/}
            {/*                    <div className="underline"></div>*/}
            {/*                </div>*/}
            {/*                <div className="card-text">*/}
            {/*                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cum eligendi nam*/}
            {/*                    tenetur. Exercitationem nihil hic obcaecati cupiditate natus ratione eligendi, dolorem*/}
            {/*                    quas earum libero.*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className="col-md-6">*/}
            {/*            <div className="card text-center">*/}
            {/*                <div className="holder">*/}
            {/*                    <img className="card-img-top" src="./img/about1.jpg" alt=""/>*/}
            {/*                </div>*/}
            {/*                <div className="card-body">*/}
            {/*                    <h4>JavaScript</h4>*/}
            {/*                    <div className="underline"></div>*/}
            {/*                </div>*/}
            {/*                <div className="card-text">*/}
            {/*                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cum eligendi nam*/}
            {/*                    tenetur. Exercitationem nihil hic obcaecati cupiditate natus ratione eligendi, dolorem*/}
            {/*                    quas earum libero.*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</section>*/}


        </>
    )
}
export default PromoResources;