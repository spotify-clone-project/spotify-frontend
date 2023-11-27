import React from 'react';
import '../css/Main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainFooter from './MainFooter';

const TopMenu = () => (
  <div className="top_menu">
    <div className="user_name">
      <p>J</p>
    </div>
    <p className="title_txt library_title">내 라이브러리</p>
    <div className="icon_box">
      <i className="fa-solid fa-magnifying-glass" />
      <i className="fa-solid fa-plus" />
    </div>
  </div>
);

const SubMenu = () => (
  <div className="sub_menu">
    <ul>
      <li>
        <a href="#">
          <button>아티스트</button>
        </a>
      </li>
    </ul>
  </div>
);

const MyList = () => (
  <div className="my_list">
    <ul>
      <li>
        <a href="#">
          <div className="list_img">
            <img src="/images/artist.png" alt="아티스트" />
          </div>
          <div className="list_information">
            <p className="list_name">BLACKPINK</p>
            <p>아티스트</p>
          </div>
        </a>
      </li>
      {/* Add more list items here */}
    </ul>
  </div>
);

const Library = () => (
  <div className="wrap">
    <TopMenu />
    <SubMenu />
    <div className="my_list_wrap">
      <div className="fillter">
        <img src="/images/sort.png" alt="필터" />
        <p>최근</p>
        <img src="/images/four-squares.png" alt="필터" className="fillter_icon" />
      </div>
      <MyList />
    </div>
    <MainFooter />
  </div>
);

export default Library;
