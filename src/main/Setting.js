import React from 'react';
import '../css/Setting.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainFooter from './MainFooter';

const Header = () => (
    <div className="title setting_title_wrap">
        <div className='setting_title'>
            <i className="prev_btn fa-solid fa-chevron-left"/>
            <p>설정</p>
        </div>
    </div>
);

const UserProfile = () => (
    <div className='user_profile'>
        <a href="#">
            <div className='user_img'>
                <i class="fa-regular fa-user"></i>
            </div>
            <div className='user_info'>
                <p>User</p>
                <p>프로필 보기</p>
            </div>
            <i class="fa-solid fa-chevron-right go_profile"></i>
        </a>
    </div>
);

const SettingMenu = () => (
    <div className='setting_menu'>
        <ul>
            <li className='account'> 
                <a href="#">
                    <p>계정</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </li>
            <li className='data_saver'> 
                <a href="#">
                    <p>데이터 세이버</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </li>
            <li className='language'> 
                <a href="#">
                    <p>언어</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </li>
            <li className='play'> 
                <a href="#">
                    <p>재생하기</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </li>
            <li className='device'> 
                <a href="#">
                    <p>기기</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </li>
            <li className='car'> 
                <a href="#">
                    <p>자동차</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </li>
            <li className='userinfo_exposure'> 
                <a href="#">
                    <p>개인정보 및 공개 범위</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </li>
            <li className='app_connection'> 
                <a href="#">
                    <p>앱에 연결하기</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </li>
            <li className='audio_quality'> 
                <a href="#">
                    <p>오디오 품질</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </li>
            <li className='storage_space'> 
                <a href="#">
                    <p>저장 공간</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </li>
            <li className='alarm'> 
                <a href="#">
                    <p>알림</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </li>
            <li className='local_file'> 
                <a href="#">
                    <p>로컬 파일</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </li>
            <li className='more_information'> 
                <a href="#">
                    <p>상세정보</p>
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </li>
        </ul>
    </div>
);

const LogoutButton = () => (
    <div className='logout_btn'>
        <a href="#">
            <button>
                로그아웃하기
            </button>
        </a>
    </div>
);

const Setting = () => {
    return (
        <div className="wrap">
            <Header />
            <UserProfile />
            <SettingMenu />
            <LogoutButton />
            <MainFooter />
        </div>
    );
};

export default Setting;