import "./Card.css";
import vectorSrc from "../../logos/mastercraft.svg";

const Card = () => {
  return (
    <>
      <section className="card__Container">
        <img className="icon" src={vectorSrc} alt="icon" />
        <p className="date__type">1d ago . Part Time</p>
        <p className="job__Role">Midlevel Back End Engineer</p>
        <p className="company">Vector</p>
        <p className="work__Country">Russia</p>
      </section>
    </>
  );
};
export default Card;
