import { useState } from 'react';
import './Works.css';
import ReactPlayer from 'react-player';
import { FaXmark } from 'react-icons/fa6';

function Works() {
  const [bigVideo, setBigVideo] = useState('');
  const [isVideo, setIsVideo] = useState(false);

  function videoPlay(video) {
    if (video === 'video1') {
      setBigVideo('https://www.youtube.com/watch?v=OmDw_xJTSuU');
      setIsVideo(true);
    } else if (video === 'video2') {
      setBigVideo('https://www.youtube.com/watch?v=VWYdcR_10dE');
      setIsVideo(true);
    } else {
      setBigVideo('https://www.youtube.com/watch?v=Qx5_XuEDdFY');
      setIsVideo(true);
    }
  }

  function fecharVideo() {
    setIsVideo(false);
  }

  return (
    <section className="works-container">
      <h2>Trabalhos</h2>
      <h4>Assista aos vídeos que Mateus Messias participou!</h4>
      <div className={`bigVideo ${isVideo ? 'show' : ''}`}>
        <>
          <ReactPlayer
            className="player"
            url={bigVideo}
            width="720px"
            height="405px"
            controls
          />
          <p onClick={fecharVideo} className="fechar">
            <FaXmark />
          </p>
        </>
      </div>
      <div className={`card-container ${isVideo ? 'slide-down' : ''}`}>
        <div className="card">
          <img
            onClick={() => videoPlay('video1')}
            src={'./thumb1.jpg'}
            alt=""
            className="video-card-image"
          />
          <h5>I Vivace Spirituoso</h5>
          <p>
            Orquestra Sinfônica Municipal de Jundiaí, sob a regência de Claudia
            Feres, apresenta o Concerto para Flautim e cordas{' '}
            <span className="destaque">I. Vivace Spirituoso</span> de O.
            Lacerda. Com performance de Mateus Messias no flautim. Gravado no
            Teatro Polytheama em 11 de março de 2023.
          </p>
        </div>
        <div className="card">
          <img
            onClick={() => videoPlay('video2')}
            src={'./thumb2.jpg'}
            alt=""
            className="video-card-image"
          />
          <h5>Mater</h5>
          <p>
            Gabriel Faro apresenta a música{' '}
            <span className="destaque">Mater</span>, do álbum Mater Et Filius,
            no quadro Talentos do canal Café Lé em Casa, de Nelson Farias, com a
            participação de Mateus Messias na flauta.
          </p>
        </div>
        <div className="card">
          <img
            onClick={() => videoPlay('video3')}
            src={'./thumb3.jpg'}
            alt=""
            className="video-card-image"
          />
          <h5>Naima</h5>
          <p>
            O Quinteto Maga interpreta <span className="destaque">Naima</span>,
            do lendário John Coltrane, em um arranjo especial criado pelo
            próprio grupo. Destaque para a participação de Mateus Messias na
            flauta.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Works;
