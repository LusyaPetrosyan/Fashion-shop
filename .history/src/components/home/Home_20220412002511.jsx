import Cards from "../card/Cards";
import "../home/home.css";
import Sli
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
    return (
      <div className="home ui container">
        <Slides slides={slidesData()} />
        <Cards />
      </div>
    );
  }
  export default Home;
