import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import Slideshow from "../Slideshow/Slideshow";
import Card from "../Card/Card";
import product1 from "../../assets/product1.jpeg";
import product2 from "../../assets/product2.webp";
import product3 from "../../assets/product3.avif";
import product4 from "../../assets/product4.jpg";

const Home = () => {
  return (
    <>
      <Slideshow />
      <section className="home-section">
        <p className="home-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          corrupti? Voluptatem, quasi repudiandae voluptates odit aliquid
          temporibus labore ipsa impedit dolorum necessitatibus quibusdam
          blanditiis! Animi corporis itaque ipsam voluptas quidem!
        </p>
        <div className="card-section">
          <Card
            productImage={product3}
            imageAlt="Sample Product"
            name="Product 1"
            productDesc="This is a sample description for Product 1."
            onStock={true}
            value={19.99}
          />
          <Card
            productImage={product4}
            imageAlt="Sample Product"
            name="Product 2"
            productDesc="This is a sample description for Product 2."
            onStock={false}
            value={29.99}
          />
          <Card
            productImage={product1}
            imageAlt="Sample Product"
            name="Product 3"
            productDesc="This is a sample description for Product 3."
            onStock={true}
            value={39.99}
          />
          <Card
            productImage={product4}
            imageAlt="Sample Product"
            name="Product 4"
            productDesc="This is a sample description for Product 4."
            onStock={true}
            value={49.99}
          />
          <Card
            productImage={product2}
            imageAlt="Sample Product"
            name="Product 5"
            productDesc="This is a sample description for Product 5."
            onStock={true}
            value={59.99}
          />
          <Card
            productImage={product3}
            imageAlt="Sample Product"
            name="Product 6"
            productDesc="This is a sample description for Product 6."
            onStock={false}
            value={69.99}
          />
        </div>
      </section>
    </>
  );
};
export default Home;
