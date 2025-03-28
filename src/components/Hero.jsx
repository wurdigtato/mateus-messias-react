import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from 'react-icons/fa';
import './Hero.css';
import { FaInstagram } from 'react-icons/fa6';

function Hero() {
  return (
    <section className="heroContainer">
      <img
        src="./hero-img.png"
        alt="Foto Mateus Messias com Orquesta de Jundiaí"
      />
      <div className="socialMedia">
        <h3>
          Me acompanhe nas <span>Redes Sociais</span>
        </h3>
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FaFacebookSquare />
        </a>
        <a href="">
          <FaTiktok />
        </a>
      </div>
    </section>
  );
}

export default Hero;
