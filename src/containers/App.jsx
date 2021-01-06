import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';
const App = () => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  useEffect(() => {
    fetch(API)
      .then(Response => Response.json())
      .then(data => setVideos(data));
  }, []);

  return (
    <div className='App'>
      <Header />
      <Search />
      {videos.mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {videos.trends.map(item => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title='Originales'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />

    </div>
  );
};
export default App;
