import Card from "./Card";
import "./CardList.css";

const CardList = ({ data }) => {
  return (
    <>
      <section className="card__Container">
        {data.map((item, id) => (
          <Card
            key={id}
            logo={item.logo}
            postedAt={item.postedAt}
            contract={item.contract}
            position={item.position}
            company={item.company}
            location={item.location}
            description={item.description}
            requirementsContent={item.requirements.content}
            requirementsItems={item.requirements.items}
            roleContent={item.role.content}
            roleItems={item.role.items}
          />
        ))}
      </section>
    </>
  );
};
export default CardList;
