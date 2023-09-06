import navStyles from "./Navbar.module.css";
import logoSvg from "../../logos/devjobs.svg";
import barsSvg from "../../logos/bars.png";
import triangle1 from "../../logos/triangle1.png";
import triangle2 from "../../logos/triangle2.png";
import triangle3 from "../../logos/triangle3.png";
const Navbar = () => {
  return (
    <>
      <nav className={navStyles.navStyling}>
        <img className={navStyles.navContent} src={logoSvg} alt="logo" />
        <img className={navStyles.navContent} src={barsSvg} alt="bars" />
        <img className={navStyles.triOne} src={triangle1} alt="triangle1" />
        <img className={navStyles.triTwo} src={triangle2} alt="triangle2" />
        <img className={navStyles.triThree} src={triangle3} alt="triangle3" />
      </nav>
    </>
  );
};
export default Navbar;
