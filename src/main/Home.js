import React from 'react';
import '../css/Main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainFooter from './MainFooter';

const HomeSection = ({ title, images }) => (
  <section className="home_section">
    <h2>{title}</h2>
    <ul>
      {images.map((image, index) => (
        <li key={index}>
          <a href={image.url}>
            <img src={image.src} alt={image.alt} />
            <p>{image.caption}</p>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

const Home = () => {
  const imagesData = [
    {
      src: '/images/main_img.jpeg',
      alt: '이미지 1',
      caption: 'Charlie Puth',
      url: '#',
    },
    {
      src: '/images/main_img.jpeg',
      alt: '이미지 1',
      caption: 'Charlie Puth',
      url: '#',
    },
    {
      src: '/images/main_img.jpeg',
      alt: '이미지 1',
      caption: 'Charlie Puth',
      url: '#',
    }
    
    // ... (other image data entries)
  ];

  return (
    <div className="wrap">
      {/* 탑메뉴 */}
      <div className="top_menu header_wrap">
        <div className="header">
          <h2>안녕하세요</h2>
          <div className='header_nav'>
            <a href="#">
              <i class="fa-regular fa-bell"></i>
            </a>
            <a href="#">
              <i class="fa-regular fa-clock"></i>
            </a>
            <a href="./setting">
              <img src="/images/gear.png" alt="설정" />
            </a>
          </div>
        </div>
        <div className="top_menu_list">
          <ul>

            <li>
              <a href="#">
                <button>음악</button>
              </a>
            </li>
            <li>
              <a href="#">
                <button>팟캐스트</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main_section_wrap">
        <HomeSection title="오늘의 최고 히트곡" images={imagesData} />
        <HomeSection title="오늘의 최고 히트곡" images={imagesData} />
        <HomeSection title="오늘의 최고 히트곡" images={imagesData} />
        <HomeSection title="오늘의 최고 히트곡" images={imagesData} />
      </div>
      {/* 푸터 메뉴 */}
      <MainFooter />
    </div>
  );
};

export default Home;
