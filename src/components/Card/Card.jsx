import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import "./card.css";

const CustomCard = (props) => {
  return (
    <Card class="card" style={{ width: "18rem" }}>
      <Card.Img
        class="card-img"
        variant="top"
        src={props.productImage}
        alt={props.imageAlt}
      />
      <Card.Body className="card-body">
        <Card.Title className="card-name">{props.name}</Card.Title>
        <Card.Text className="card-description">{props.productDesc}</Card.Text>
        <div className="card-info">
          {props.onStock ? (
            <h4 className="onStock">On Stock</h4>
          ) : (
            <h4 className="outStock">Out of Stock</h4>
          )}
          <h4 className="card-price">${props.value}</h4>
        </div>
        <Button className="card-button" variant="primary">
          Buy it
        </Button>
      </Card.Body>
    </Card>
  );
};

CustomCard.propTypes = {
  imageAlt: PropTypes.string,
  name: PropTypes.string,
  productDesc: PropTypes.string,
  onStock: PropTypes.bool,
  value: PropTypes.number,
  productImage: PropTypes.string,
};

CustomCard.defaultProps = {
  imageAlt: "Image Description",
  name: "Product Name",
  productDesc: "Product Description",
  onStock: false,
  value: 0,
};

export default CustomCard;