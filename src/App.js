import Navbar from "./components/Navbar";
import {motion, useScroll} from "framer-motion";

function App() {
    const {scrollYProgress} = useScroll();

    return (
        <div className="App">
            <Navbar/>
            <motion.div className="progress-bar" style={{scaleX: scrollYProgress}}/>
        </div>
    );
}

export default App;
