import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MainFooter = () => {
  const location = useLocation();

  return (
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
  );
};

export default MainFooter;
