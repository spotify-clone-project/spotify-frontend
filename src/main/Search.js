import React from 'react';
import '../css/Main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainFooter from './MainFooter';

const TopMenu = () => (
  <div className="top_menu">
    <p className="title_txt">검색</p>
    <img src="/images/camera.png" alt="카메라" />
  </div>
);

const SearchBar = () => (
  <div className="search_bar">
    <i className="fa-solid fa-magnifying-glass" />
    <input type="text" placeholder="어딴 것을 듣고 싶으세요?" />
  </div>
);

const ContentsBox = () => (
  <div className="contents_box">
    {Array(16).fill().map((_, index) => (
      <div key={index}>
        <a href="#">
          <img src="/images/Search Link.png" alt="search_link" />
        </a>
      </div>
    ))}
  </div>
);

const Search = () => (
  <div className="wrap">
    <TopMenu />
    <SearchBar />
    <div className="main">
      <p>모두 둘러보기</p>
      <ContentsBox />
    </div>
    {/* 푸터 메뉴 */}
    <MainFooter />
  </div>
);

export default Search;
