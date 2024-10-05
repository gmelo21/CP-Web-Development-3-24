import React, { useState, useEffect } from "react";
import "./home.css";
import Slideshow from "../Slideshow/Slideshow";
import Card from "../Card/Card";
import About from "../About/About";
import product1 from "../../assets/product1.jpeg";
import product2 from "../../assets/product2.webp";
import product3 from "../../assets/product3.avif";
import product4 from "../../assets/product4.jpg";

const Home = () => {
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    const storedVehicles = localStorage.getItem("vehicles");
    if (storedVehicles) {
      setUserProducts(JSON.parse(storedVehicles));
    }
  }, []);

  const handleDeleteUserProduct = (id) => {
    const updatedProducts = userProducts.filter((vehicle) => vehicle.id !== id);
    setUserProducts(updatedProducts);
    localStorage.setItem("vehicles", JSON.stringify(updatedProducts));
  };

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
        <div id="card-section" className="card-section">
          {[
            {
              id: "predefined1",
              productImage: product3,
              name: "Product 1",
              productDesc: "This is a sample description for Product 1.",
              onStock: true,
              value: 39.99,
            },
            {
              id: "predefined2",
              productImage: product2,
              name: "Product 2",
              productDesc: "This is a sample description for Product 2.",
              onStock: true,
              value: 59.99,
            },
            {
              id: "predefined3",
              productImage: product1,
              name: "Product 3",
              productDesc: "This is a sample description for Product 3.",
              onStock: true,
              value: 19.99,
            },
            {
              id: "predefined4",
              productImage: product4,
              name: "Product 4",
              productDesc: "This is a sample description for Product 4.",
              onStock: false,
              value: 49.99,
            },
            {
              id: "predefined5",
              productImage: product4,
              name: "Product 5",
              productDesc: "This is a sample description for Product 5.",
              onStock: true,
              value: 29.99,
            },
            {
              id: "predefined6",
              productImage: product3,
              name: "Product 6",
              productDesc: "This is a sample description for Product 6.",
              onStock: false,
              value: 69.99,
            },
          ].map((predefined) => (
            <Card
              key={predefined.id}
              productImage={predefined.productImage}
              imageAlt={`Image of ${predefined.name}`}
              name={predefined.name}
              productDesc={predefined.productDesc}
              onStock={predefined.onStock}
              value={predefined.value}
            />
          ))}
          {userProducts.map((vehicle) => (
            <Card
              key={vehicle.id}
              productImage={vehicle.productImage}
              imageAlt={`Image of ${vehicle.name}`}
              name={vehicle.name}
              productDesc={vehicle.productDesc}
              onStock={vehicle.onStock}
              value={parseFloat(vehicle.price)}
              onDelete={() => handleDeleteUserProduct(vehicle.id)}
            />
          ))}
        </div>

        <div id="about-section" className="about-section">
          <About />
        </div>
      </section>
    </>
  );
};

export default Home;
