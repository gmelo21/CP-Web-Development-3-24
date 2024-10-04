import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import Slideshow from "../Slideshow/Slideshow";
import Card from "../Card/Card";

const Home = () => {
  return (
    <>
      <Slideshow />
      <section id="home-section">
        <p id="home-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          corrupti? Voluptatem, quasi repudiandae voluptates odit aliquid
          temporibus labore ipsa impedit dolorum necessitatibus quibusdam
          blanditiis! Animi corporis itaque ipsam voluptas quidem! Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Dolore praesentium in
          explicabo, voluptates odio optio rem nemo adipisci impedit? Harum
          corporis quisquam quibusdam nam assumenda eos mollitia quod ipsam
          suscipit?
        </p>
        <div className="card-section">
          <Card
            imageAlt="Sample Product"
            name="Product 1"
            productDesc="This is a sample description for Product 1."
            onStock={true}
            value={29.99}
          />
          <Card
            imageAlt="Sample Product"
            name="Product 1"
            productDesc="This is a sample description for Product 1."
            onStock={false}
            value={29.99}
          />
          <Card
            imageAlt="Sample Product"
            name="Product 1"
            productDesc="This is a sample description for Product 1."
            onStock={true}
            value={29.99}
          />
          <Card
            imageAlt="Sample Product"
            name="Product 1"
            productDesc="This is a sample description for Product 1."
            onStock={true}
            value={29.99}
          />
        </div>
      </section>
    </>
  );
};
export default Home;
