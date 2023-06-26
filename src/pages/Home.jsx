import Navbar from "../components/Navbar";
import NavbarDesktop from "../components/NavbarDesktop";
import MainHero from "../components/MainHero";
import AboutMe from "../components/AboutMe";

function Home() {
    return (
    <>
      <Navbar />
      <NavbarDesktop />
      <MainHero />
      <AboutMe />
    </>
  );
}

export default Home;
