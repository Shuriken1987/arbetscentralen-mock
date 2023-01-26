import Hero from "../components/Header/Hero";
import Intro from "../components/Intro/Intro";
import WhyUs from "../components/WhyUs/WhyUs";
import PromoResources from "../components/PromoResources/PromoResources";
import ContactAndSubscribe from "../components/ContactAndSubscribe/ContactAndSubscribe";

const Home = () => {

    return (
        <>
            <Hero/>
            <Intro/>
            <WhyUs/>
            <PromoResources/>
            <ContactAndSubscribe/>
        </>
    )
}

export default Home;