import Navbar from "./components/Navigation/Navbar";
// import {motion, useScroll} from "framer-motion";
import NavTop from "./components/Navigation/NavTop";
import Home from "./pages/Home";

function App() {
    // const {scrollYProgress} = useScroll();

    return (
        <div className="App">
            <NavTop/>
            <Navbar/>
            {/*<motion.div className="progress-bar" style={{scaleX: scrollYProgress}}/>*/}
            <Home/>
        </div>
    );
}

export default App;
