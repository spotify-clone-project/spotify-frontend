import { Link, useLocation } from 'react-router-dom';
import { React, Fragment } from 'react';

const MainFooter = () => {
  const location = useLocation();

  return (
    <Fragment>
      <div className='current_music'>
        <img src="/images/album_cover.jpeg" alt="앨범커버"  className='album_cover_img'/>
        <div className='album_music_info'>
            <p>Attention</p>
            <p className='album_artist'>NewJeans</p>
        </div>
        <div className='music_play_box'>
          <img src="/images/speaker.png" alt="스피커" />
          <i className="fa-solid fa-play"></i>
        </div>
        <div className='play_line'></div>
      </div>

      <div className="footer">
        <div className="footer_filtter" />
        <div className="footer_menu">
          <ul>
            <li>
              <Link to="/home" className={`home ${location.pathname === '/home' || location.pathname === '/setting' ? 'active' : ''}`}>
                <i className="fa-solid fa-house" />
                <p>홈</p>
              </Link>
            </li>
            <li>
              <Link to="/search" className={`search ${location.pathname === '/search' ? 'active' : ''}`}>
                <i className="fa-solid fa-magnifying-glass" />
                <p>검색하기</p>
              </Link>
            </li>
            <li>
              <Link to="/library" className={`libary ${location.pathname === '/library' ? 'active' : ''}`}>
                <i className="fa-regular fa-file" />
                <p>내 라이브러리</p>
              </Link>
            </li>
            <li>
              <a href="/premium" className={`libary ${location.pathname === '/Premium' ? 'active' : ''}`}>
                <i className="fa-brands fa-spotify" />
                <p>프리미엄</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default MainFooter;
