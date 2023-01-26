import {FaArrowCircleRight} from "react-icons/fa";

const ContactUs = () => {
    return (
        <>
            <div className="col-md-5 contact-left py-5">
                <p className="eyebrow">CONNECT WITH US AND TAKE THE NEXT STEP TOWARDS YOUR DREAM JOB OR BUSINESS SUCCESS</p>
                <h2>CONTACT US FOR PERSONALIZED SUPPORT</h2>
                <p className="lead">Don't go it alone. Our team is here to help you every step of the way. If you have any questions or
                    need assistance, please don't hesitate to reach out to us. We'll be happy to provide you with the
                    support and guidance you need to achieve your job search or talent acquisition goals. Contact us
                    today and let's work together for a successful outcome.
                </p>
                <a href="/" className="-caps -arrow-after contact-cta"><span>LET'S TALK</span></a> <FaArrowCircleRight/>
            </div>
        </>
    )
}
export default ContactUs;