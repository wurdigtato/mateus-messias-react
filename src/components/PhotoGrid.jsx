import { useEffect, useState } from 'react';
import pic1 from '../../public/mmpic1.jpg';
import pic2 from '../../public/mmpic2.jpg';
import pic3 from '../../public/mmpic3.jpg';
import pic4 from '../../public/mmpic4.jpg';
import pic5 from '../../public/mmpic5.webp';
import pic6 from '../../public/mmpic6.jpg';
import pic7 from '../../public/mmpic7.jpg';
import pic8 from '../../public/mmpic8.jpg';
import pic9 from '../../public/mmpic9.jpg';
import './PhotoGrid.css';

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];

function PhotoGrid() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length); // Atualiza o índice
    }, 5000); // Tempo entre as trocas de imagem

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="photogrid">
      {images.map((image, imgIndex) => (
        <img
          key={imgIndex}
          src={image}
          alt=""
          className={imgIndex === index ? 'active' : 'inactive'}
        />
      ))}
    </div>
  );
}

export default PhotoGrid;
