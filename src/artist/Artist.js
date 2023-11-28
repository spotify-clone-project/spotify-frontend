import React, { useState, useEffect } from 'react';
import '../artist/Artist.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainFooter from '../main/MainFooter';
import { useParams } from 'react-router-dom';
import Api from '../Api';

const Artist = () => {
    const { id } = useParams();
    const [artistData, setArtistData] = useState(null);

    // API 호출을 위한 useEffect
    useEffect(() => {
        Api.get(`/music/artist/${id}`)
            .then(response => {
                setArtistData(response.data); // API 호출 결과를 상태에 저장
            })
            .catch(error => {
                console.error("Error fetching artist data: ", error);
                // 에러 처리 로직
            });
    }, [id]); // id가 변경될 때마다 API를 다시 호출

    // 데이터가 로드되지 않았을 경우의 처리
    if (!artistData) {
        return <div>Loading...</div>;
    }

    // 첫 번째 곡의 앨범 커버 이미지 경로
    const firstSongCover = artistData.songs[0]?.album.coverImagePath;
    // '/file/music/' 부분과 파일 이름 부분을 분리
    const coverPathSegments = firstSongCover.split('/');
    const fileName = coverPathSegments.pop(); // 배열의 마지막 요소(파일 이름)를 추출
    const encodedFileName = encodeURIComponent(fileName); // 파일 이름만 인코딩
    const imagePathWithoutFileName = coverPathSegments.join('/'); // 파일 이름을 제외한 경로를 다시 조합
    const imageUrl = `${process.env.REACT_APP_API_BASE_URL}${imagePathWithoutFileName}/${encodedFileName}`;

    console.log(imageUrl)

    return (
        <div className="wrap">
            <div className='artist_cover' style={{ background: `url(${imageUrl})`, backgroundSize: '100%' }}>
                {/* 아티스트 표지 이미지와 이름 */}
                <div className='artist_cover_fillter'></div>
                <i className="prev_btn fa-solid fa-chevron-left"/>
                <h1>{artistData.artist.name}</h1>
            </div>
            {/* 아티스트 정보 및 노래 목록 */}
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
                    {artistData.songs.map((song, index) => (
                        <div className='music_chart_list' key={song.id}>
                            <p className='music_number'>{index + 1}</p>
                            <img src={song.album.coverImagePath} alt="앨범커버" className='album_cover_img' />
                            <div className='music_info'>
                                <p className='music_name'>{song.title}</p>
                                <p className='listeners_number'>{/* 청취자 수 데이터 필요 */}</p>
                            </div>
                            <img src="/images/menu-dots.png" alt="자세히보기" />
                        </div>
                    ))}
                </div>
            </div>
            
            <MainFooter />
            </div>
        </div>
    );
};

export default Artist;
