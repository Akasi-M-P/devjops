import "./Card.css";

const Card = ({ logo, postedAt, contract, position, company, location }) => {
  return (
    <>
      <section className="card">
        <img className="icon" src={logo} alt="icon" />
        <p className="date__type">
          {postedAt} . {contract}
        </p>
        <p className="job__Role">{position}</p>
        <p className="company">{company}</p>
        <p className="work__Country">{location}</p>
      </section>
    </>
  );
};
export default Card;
