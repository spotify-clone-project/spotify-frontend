import React from 'react';
import '../css/Main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainFooter from './MainFooter';

const Premium = () => {
    return (
        <div className="wrap">
            <div className="premium_setting">
                <a href="./setting">
                 <img src="/images/gear.png" alt="설정" />
                </a>
            </div>
            <div className="premium_title">
                <p>Spotify Premium 맴버가 되어보세요. 1개월 무료입니다.</p>
                <p>앱에서는 Spotify Premium을 구독하실 수 없습니다. 죄송합니다.</p>
            </div>
            <div className="plan_option">
                <p className='plan_option_title'>요금제 옵션</p>
                <div className='plan_option_box'>
                    <div className="premium_solo premium_option">
                        <p className='free_plan'>1개월 무료</p>
                        <p className='plan_name'>Premium 개인</p>
                        <p>Premium 1개월 무료 체험 • 나만의 플레이리스트 • 다운로드하여 오프라인에서 감상 • 언제든 해지 가능</p>
                    </div>
                    <div className="premium_duo premium_option">
                        <p className='free_plan'>1개월 무료</p>
                        <p className='plan_name'>Premium 듀오</p>
                        <p>Premium 1개월 무료 체험 • Premium 계정 2개 • 모바일 기기 및 PC • 맞춤형 플레이리스트 • 다운로드하여 오프라인에서 듣기 • 언제든 해지 가능</p>
                    </div>
                    <div className="premium_basic premium_option">
                        <p className='plan_name'>Premium 베이직</p>
                        <p>모바일 및 PC에서 스트리밍 • 나만의 플레이리스트 <br></br>• 언제든 해지 가능</p>
                    </div>
                </div>
            </div>
            
            <MainFooter />
        </div>
    );
};


export default Premium;
