import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LastPlayedCarousel = () => {
  // Datos de ejemplo para las últimas canciones reproducidas
  const lastPlayedSongs = [
    {
      id: 1,
      title: '31 Minutos, full album 2022',
      artist: 'Juan Carlos Bodoque, Patana, Tulio Triviño, Juanín, Calcetin...',
      imageUrl: 'https://media.timeout.com/images/105717425/image.jpg',
    },
    {
      id: 2,
      title: '31 Minutos, full album 2023',
      artist: 'Juan Carlos Bodoque, Patana, Tulio Triviño, Juanín, Calcetin...',
      imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/414fb78b-bbc5-4a5a-8d84-de204fc95def/df34h5y-08e3b3f3-decb-40e1-a135-2dced2577b2d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxNGZiNzhiLWJiYzUtNGE1YS04ZDg0LWRlMjA0ZmM5NWRlZlwvZGYzNGg1eS0wOGUzYjNmMy1kZWNiLTQwZTEtYTEzNS0yZGNlZDI1NzdiMmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.puzRQPvcZS-sy5bUnBdcp3M5JSQqbnGjmyOaYnV07as',
    },
    // ... Agrega más canciones según sea necesario
  ];

  // Configuración del carrusel
  const carouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-8 mb-16 opacity-100 transition-opacity duration ease-in-out animate-fade-in">
      
      <Slider {...carouselSettings}>
        {lastPlayedSongs.map((song) => (
          <div key={song.id} className="px-2">
            <img
              src={song.imageUrl}
              alt={`Portada de ${song.title}`}
              className="w-full h-32 object-cover rounded-lg shadow-lg"
            />
            <p className="text-sky-950 text-center mt-2">{song.artist}</p>
            <p className="text-sky-950 text-center">{song.title}</p>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LastPlayedCarousel;
