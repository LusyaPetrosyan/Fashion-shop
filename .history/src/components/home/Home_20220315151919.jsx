import Cards from "../card/Cards";
import "../home/home.css";
import Slides from "../slider/Slides";
import img1


const Home = () => {
    return (
        <div className="home">
            <Slides />
           <Cards />
        </div>
    );
}

export default Home;
