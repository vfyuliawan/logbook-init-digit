import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import SocialLinks from "./SocialLinks";


function Dashboard() {
    return ( 
        <div className="">
        <NavBar />
        <Home />
        <Portfolio />
        <Contact />
        <SocialLinks />
        </div>
     );
}

export default Dashboard;