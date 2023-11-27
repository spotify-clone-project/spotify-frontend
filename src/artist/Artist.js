import React from 'react';
import '../artist/Artist.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainFooter from '../main/MainFooter';

const Artist = () => {
    return (
        <div className="wrap">
            <div className='artist_cover'>
                <div className='artist_cover_fillter'></div>
                <i className="prev_btn fa-solid fa-chevron-left"/>
                <h1>NewJeans</h1>
            </div>
            <div className='artist_info'>
                <div className='artist_top_menu_wrap'>
                    <p className='listen_people'>월별 청취자 2110.3만명</p>
                    <div className='artist_top_menu'>
                        <div className='artist_follow'>
                            <a href="#">
                                <button>팔로우하기</button>
                            </a>
                            <a href="#">
                                <img src="/images/menu-dots.png" alt="자세히보기" />
                            </a>
                        </div>
                        <div className='music_play'>
                            <img src="/images/shuffle.png" alt="셔플" className='shuffle_btn' />
                            <div className='play_btn'>
                                <img src="/images/play-button.png" alt="플레이" />
                            </div>
                        </div>
                    </div>
                    <div className='artist_sub_menu'>
                        <ul>
                            <li>
                                <p className='music'>음악</p>
                            </li>
                            <li>
                                <p>Merch</p>
                            </li>
                        </ul>
                    </div>
                    <div className='music_chart'>
                        <p className='music_chart_title'>인기</p>
                        <div className='music_chart_list'>
                            <p className='music_number'>1</p>
                            <img src="/images/album_cover.jpeg" alt="앨범커버"  className='album_cover_img' />
                            <div className='music_info'>
                                <p className='music_name'>Super Shy</p>
                                <p className='listeners_number'>347,917,629</p>
                            </div>
                            <img src="/images/menu-dots.png" alt="자세히보기" />
                        </div>
                        <div className='music_chart_list'>
                            <p className='music_number'>1</p>
                            <img src="/images/album_cover.jpeg" alt="앨범커버"  className='album_cover_img'/>
                            <div className='music_info'>
                                <p>Super Shy</p>
                                <p className='listeners_number'>347,917,629</p>
                            </div>
                            <img src="/images/menu-dots.png" alt="자세히보기" />
                        </div>
                        <div className='music_chart_list'>
                            <p className='music_number'>1</p>
                            <img src="/images/album_cover.jpeg" alt="앨범커버"  className='album_cover_img'/>
                            <div className='music_info'>
                                <p>Super Shy</p>
                                <p className='listeners_number'>347,917,629</p>
                            </div>
                            <img src="/images/menu-dots.png" alt="자세히보기" />
                        </div>
                        <div className='music_chart_list'>
                            <p className='music_number'>1</p>
                            <img src="/images/album_cover.jpeg" alt="앨범커버"  className='album_cover_img'/>
                            <div className='music_info'>
                                <p>Super Shy</p>
                                <p className='listeners_number'>347,917,629</p>
                            </div>
                            <img src="/images/menu-dots.png" alt="자세히보기" />
                        </div>
                        <div className='music_chart_list'>
                            <p className='music_number'>1</p>
                            <img src="/images/album_cover.jpeg" alt="앨범커버"  className='album_cover_img'/>
                            <div className='music_info'>
                                <p>Super Shy</p>
                                <p className='listeners_number'>347,917,629</p>
                            </div>
                            <img src="/images/menu-dots.png" alt="자세히보기" />
                        </div>
                        <div className='music_chart_list'>
                            <p className='music_number'>1</p>
                            <img src="/images/album_cover.jpeg" alt="앨범커버"  className='album_cover_img'/>
                            <div className='music_info'>
                                <p>Super Shy</p>
                                <p className='listeners_number'>347,917,629</p>
                            </div>
                            <img src="/images/menu-dots.png" alt="자세히보기" />
                        </div>
                    </div>
                </div>
            </div>
            
            <MainFooter />
        </div>
    );
};


export default Artist;
