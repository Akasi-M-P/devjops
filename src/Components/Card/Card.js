import "./Card.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Card = ({ logo, postedAt, contract, position, company, location }) => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <section className="card" onClick={() => setLgShow(true)}>
        <img className="icon" src={logo} alt="icon" />
        <p className="date__type">
          {postedAt} . {contract}
        </p>
        <p className="job__Role">{position}</p>
        <p className="company">{company}</p>
        <p className="work__Country">{location}</p>
      </section>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {position}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
};
export default Card;
