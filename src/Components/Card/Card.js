import "./Card.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "../Button/Button";

const Card = ({
  logo,
  postedAt,
  contract,
  position,
  company,
  location,
  description,
  requirementsContent,
  requirementsItems,
  roleContent,
  roleItems,
}) => {
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
        <Modal.Body>
          <p className="job__description">Job Description</p>
          <p className="description__para">{description}</p>
          <p className="requirements">Requirements</p>
          <p className="requirements__para">{requirementsContent}</p>
          <p className="requirements__para">{requirementsItems}</p>
          <p className="role">Role</p>
          <p className="role__para">{roleContent}</p>
          <p className="role__para">{roleItems}</p>
        </Modal.Body>
        <section className="btn__Container">
          <Button name="Apply" />
        </section>
      </Modal>
    </>
  );
};
export default Card;
