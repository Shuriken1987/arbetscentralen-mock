import ContactUs from "./ContactUs";
import Subscribe from "./Subscribe";
import "./contactAndSubscribeStyle.scss"

const ContactAndSubscribe = ()=>{

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-around">
                    <ContactUs/>
                    <Subscribe/>
                </div>
            </div>
        </>
    )

}
export default ContactAndSubscribe;