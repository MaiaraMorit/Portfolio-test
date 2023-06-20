import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="relative">
      <div className="flex flex-col justify-center bg-gray-100 p-4 w-150">
        <p>Skills</p>
        <Image
          src="/nodejs-logo.png"
          alt="Node.js"
          width={150}
          height={150}
        />
        <Image
          src="/React.png"
          alt="React"
          width={150}
          height={150}
        />
        <Image
          src="/javascript.png"
          alt="JavaScript"
          width={300}
          height={300}
        />
        <Image
          src="/redux.png"
          alt="Redux"
          width={100}
          height={100}
        />
        <Image
          src="/insomnia.png"
          alt="insomnia"
          width={80}
          height={80}
        />
        <Image
          src="/docker.png"
          alt="docker"
          width={80}
          height={80}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 invisible opacity-0 transition-opacity duration-300">
        <Slider {...settings}>
          <div>
            <h3>Node.js</h3>
            <Image
              src="/nodejs-logo.png"
              alt="Node.js"
              width={150}
              height={150}
            />
            {/* Outras habilidades relacionadas ao Node.js */}
          </div>
          <div>
            <h3>React</h3>
            <Image
              src="/React.png"
              alt="React"
              width={150}
              height={150}
            />
            {/* Outras habilidades relacionadas ao React */}
          </div>
          {/* Adicione outros slides para as suas outras habilidades */}
        </Slider>
      </div>
      <style>{`
        .relative:hover .absolute {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
    </div>
  );
}

export default Carousel;

