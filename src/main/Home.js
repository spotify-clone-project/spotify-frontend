import React, { useEffect, useState } from 'react';
import '../css/Main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainFooter from './MainFooter';
import Api from '../Api'


const HomeSection = ({ title, albums }) => (
  <section className="home_section">
    <h2>{title}</h2>
    <ul>
      {albums.map((album) => (
        <li key={album.id}>
          <a href={`/album/${album.id}`}>
            <img src={album.coverImagePath} alt={album.title} />
            <p className='album_title_name'>{album.title}</p>
            <p className='album_artist_name'>{album.artist.name}</p>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

const Home = () => {
  const [imagesData, setImagesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await Api.get('/music/albums'); // Api 인스턴스를 사용하여 요청을 보냅니다.
        setImagesData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching album data:', error);
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div className="wrap">
      {/* 탑메뉴 */}
      <div className="top_menu header_wrap">
        <div className="header">
          <h2>안녕하세요</h2>
          <div className='header_nav'>
            <a href="#">
              <i className="fa-regular fa-bell"></i>
            </a>
            <a href="#">
              <i className="fa-regular fa-clock"></i>
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
        {loading ? ( // 로딩 중인 경우 로딩 메시지 표시
          <p>Loading...</p>
        ) : (
          <>
            <HomeSection title="오늘의 최고 히트곡" albums={imagesData} />
            <HomeSection title="오늘의 최고 히트곡" albums={imagesData} />
            <HomeSection title="오늘의 최고 히트곡" albums={imagesData} />
          </>
        )}
      </div>
      {/* 푸터 메뉴 */}
      <MainFooter />
    </div>
  );
};

export default Home;
