import { FaPlus } from 'react-icons/fa6';
import './About.css';
import PhotoGrid from './PhotoGrid';

function About() {
  return (
    <section className="about-container">
      <div className="about-content">
        <img src="./about-img.jpg" alt="" />
        <h3>
          Prazer, <span>Mateus Messias</span>!
        </h3>
        <p>
          Minha paixão pela música começou na infância e desde então já toquei
          em palcos como a Sala São Paulo e o Theatro São Pedro.
          <br />
          Me formei pela UFPel, fiz especialização na EMESP Tom Jobim e hoje
          curso mestrado na UNICAMP, pesquisando a obra de Nivaldo Ornelas. Além
          de me apresentar em grupos como o Quinteto Dona Niza, também ensino
          música, compartilhando minha experiência que une o erudito e o
          popular.
        </p>
        <a href="#">
          Mais sobre Messias
          <i className="plus">
            <FaPlus />
          </i>
        </a>
      </div>
      <PhotoGrid />
    </section>
  );
}

export default About;
