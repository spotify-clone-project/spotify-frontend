import React, { useState, useEffect } from 'react';
import '../album/Album.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainFooter from '../main/MainFooter';
import { useParams } from 'react-router-dom';
import Api from '../Api';

const Album = () => {
    const { id } = useParams();
    const [albumData, setAlbumData] = useState(null);

    // API 호출을 위한 useEffect
    useEffect(() => {
        Api.get(`/music/album/${id}`)
            .then(response => {
                setAlbumData(response.data); // API 호출 결과를 상태에 저장
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                // 에러 처리 로직
            });
    }, [id]); // id가 변경될 때마다 API를 다시 호출

    // 데이터가 로드되지 않았을 경우의 처리
    if (!albumData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="wrap">
            <div className='album_cover'>
                <i className="prev_btn fa-solid fa-chevron-left"/>
                <img src={albumData.album.coverImagePath} alt={albumData.album.title} />
            </div>
            <div className='album_info'>
                <h2>{albumData.album.title}</h2>
                <div className='artist_name'>
                    <img src="/images/artist_cover.jpeg" alt={albumData.album.artist.name} />
                    <p>{albumData.album.artist.name}</p>
                </div>
                <p className='album_date'>EP • {new Date(albumData.album.releaseDate).getFullYear()}</p>
            </div>
            {/* 나머지 컴포넌트 부분 */}
            <div className='album_music_list'>
                {albumData.songs.map(song => (
                    <div className='album_music' key={song.id}>
                        <div className='album_music_info'>
                            <p>{song.title}</p>
                            <p className='album_artist'>{song.artist.name}</p>
                        </div>
                        <img src="/images/menu-dots.png" alt="자세히보기" />
                    </div>
                ))}
            </div>
            
            <MainFooter />
        </div>
    );
};

export default Album;
