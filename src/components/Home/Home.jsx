import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import Slideshow from "../Slideshow/Slideshow";

const Home = () => {
  return (
    <>
      <Slideshow />
      <section id="home-section">
        <p>Os veículos elétricos (VEs) são uma alternativa promissora para a mobilidade sustentável, contribuindo para a redução das emissões de gases de efeito estufa. Ao substituírem motores a combustão, os VEs diminuem a poluição do ar nas cidades, melhorando a qualidade do ambiente urbano e a saúde pública. Com o avanço das fontes de energia renovável, a eletricidade utilizada para recarregar esses veículos tende a ser cada vez mais limpa, amplificando seus benefícios ambientais e promovendo um futuro mais sustentável.</p>
      </section>
    </>
  );
};
export default Home;
