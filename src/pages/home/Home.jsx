import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbarbar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">container</div>
    </div>
  );
};

export default Home;