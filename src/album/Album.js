import React from 'react';
import '../album/Album.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainFooter from '../main/MainFooter';

const Album = () => {
    return (
        <div className="wrap">
            <div className='album_cover'>
                <i className="prev_btn fa-solid fa-chevron-left"/>
                <img src="/images/album_cover.jpeg" alt="앨범커버" />
            </div>
            <div className='album_info'>
                <h2>NewJeans 1st EP 'New Jeans'</h2>
                <div className='artist_name'>
                    <img src="/images/artist_cover.jpeg" alt="아티스트 이미지" />
                    <p>NewJeans</p>
                </div>
                <p className='album_date'>EP • 2022</p>
            </div>
            <div className='album_music_control'>
                <div className='album_music_add'>
                    <div className='album_music_add_icon'>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <img src="/images/menu-dots.png" alt="자세히보기" />
                </div>
                <div className='music_play'>
                    <img src="/images/shuffle.png" alt="셔플" className='shuffle_btn' />
                    <div className='play_btn'>
                        <img src="/images/play-button.png" alt="플레이" />
                    </div>
                </div>
            </div>
            <div className='album_music_list'>
                 <div className='album_music'>
                    <div className='album_music_info'>
                        <p>Super Shy</p>
                        <p className='album_artist'>NewJeans</p>
                    </div>
                    <img src="/images/menu-dots.png" alt="자세히보기" />
                </div>
                 <div className='album_music'>
                    <div className='album_music_info'>
                        <p>Super Shy</p>
                        <p className='album_artist'>NewJeans</p>
                    </div>
                    <img src="/images/menu-dots.png" alt="자세히보기" />
                </div>
                 <div className='album_music'>
                    <div className='album_music_info'>
                        <p>Super Shy</p>
                        <p className='album_artist'>NewJeans</p>
                    </div>
                    <img src="/images/menu-dots.png" alt="자세히보기" />
                </div>
                 <div className='album_music'>
                    <div className='album_music_info'>
                        <p>Super Shy</p>
                        <p className='album_artist'>NewJeans</p>
                    </div>
                    <img src="/images/menu-dots.png" alt="자세히보기" />
                </div>
                 <div className='album_music'>
                    <div className='album_music_info'>
                        <p>Super Shy</p>
                        <p className='album_artist'>NewJeans</p>
                    </div>
                    <img src="/images/menu-dots.png" alt="자세히보기" />
                </div>
                 <div className='album_music'>
                    <div className='album_music_info'>
                        <p>Super Shy</p>
                        <p className='album_artist'>NewJeans</p>
                    </div>
                    <img src="/images/menu-dots.png" alt="자세히보기" />
                </div>
            </div>
            
            <MainFooter />
        </div>
    );
};


export default Album;
