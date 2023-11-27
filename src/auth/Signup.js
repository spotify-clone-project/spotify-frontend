import React, { useState } from 'react';
import style from '../css/Signup.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import googleIcon from '../images/google-icon.svg';
import facebookIcon from '../images/facebook-icon.svg';
import appleIcon from '../images/apple-icon.svg';


const Signup = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birth, setBirth] = useState('2013-11-23');
    const [gender, setGender] = useState('woman');
    const [name, setName] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleNext = () => setCurrentStep(current => current + 1);
    const handlePrev = () => setCurrentStep(current => current - 1);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleSignup = async () => {
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    birth,
                    gender,
                    name,
                }),
            });
    
            if (!response.ok) {
                throw new Error('Signup failed');
            }
    
            const responseData = await response.json();
            console.log('Signup in successfully', responseData);
            // 처리 로직 (예: 로그인 페이지로 이동)
        } catch (error) {
            console.error('Signup failed', error);
        }
    };
    

    const getSectionClassName = (stepNumber) => {
      return currentStep === stepNumber ? "signup_section current" : "signup_section";
    };

    return (
        <div className={`signup_wrap ${style}`}>
            {/* Step 1 */}
            <section className={`${getSectionClassName(1)}`} id="step1">

            <div className="spotify_logo">
                    <i className="fa-brands fa-spotify"></i>
                </div>
                <div className="txt">
                    <h1>내 마음에 꼭 드는 또 다른 플레이리스트를 발견해보세요.</h1>
                </div>
                <div className="join_form">
                    <button className="btn join_btn" onClick={() => handleNext()}>가입하기</button>
                    <a href="#" className="btn">
                    <div className="btn_icon">
                        <img src={googleIcon} alt="google" />
                    </div>
                    <button>Google로 계속하기</button>
                </a>
                <a href="#" className="btn">
                    <div className="btn_icon">
                        <img src={facebookIcon} alt="facebook" />
                    </div>
                    <button>Facebook으로 계속하기</button>
                </a>
                <a href="#" className="btn">
                    <div className="btn_icon">
                        <img src={appleIcon} alt="apple" />
                    </div>
                    <button>Apple로 계속하기</button>
                </a>                </div>
                <a href="/login" className="login">로그인하기</a>
            </section>

            {/* Step 2 */}
            <section className={`${getSectionClassName(2)}`} id="step2">
                  <div className="title">
                      <i className="prev_btn fa-solid fa-chevron-left" onClick={handlePrev} />
                      <p>계정 만들기</p>
                  </div>
                  <div className="signup_email">
                      <p className="explane">이메일 주소가 무엇인가요?</p>
                      <div className="email_input">
                          <input type="text" name="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                  </div>
                  <span className="msg">나중에 이 이메일 주소를 확인해야 합니다.</span>
                  <button className="next_btn" onClick={handleNext}>
                      다음
                  </button>
              </section>

            {/* Step 3 */}
            <section className={`${getSectionClassName(3)}`} id="step3">
                    <div className="title">
                    <i className="prev_btn fa-solid fa-chevron-left" onClick={handlePrev} />
                        <p>계정 만들기</p>
                    </div>
                    <div className="user_password">
                        <p className="explane">비밀번호 만들기</p>
                        <div className="password_input">
                            <input type={showPassword ? "text" : "password"} name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <i className={showPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'} onClick={togglePasswordVisibility} />
                        </div>
                    </div>
                    <span className="msg">8자 이상을 사용하세요.</span>
                    <button className="next_btn" onClick={handleNext}>
                        다음
                    </button>
                </section>

            {/* Step 4 */}
            <section className={`${getSectionClassName(4)}`} id="step4">
                    <div className="title">
                    <i className="prev_btn fa-solid fa-chevron-left" onClick={handlePrev} />
                        <p>계정 만들기</p>
                    </div>
                    <div className="user_birth">
                        <p className="explane">생년월일이 언제인가요?</p>
                        <div className="birth_input">
                            <input type="date" name="birth" value={birth} onChange={(e) => setBirth(e.target.value)} />
                        </div>
                    </div>
                    <span className="msg"></span>
                    <button className="next_btn" onClick={handleNext}>
                        다음
                    </button>
                </section>

            {/* Step 5 */}
            <section className={`${getSectionClassName(5)}`} id="step5">
                    <div className="title">
                    <i className="prev_btn fa-solid fa-chevron-left" onClick={handlePrev} />
                        <p>계정 만들기</p>
                    </div>
                    <div className="user_gender">
                        <p className="explane">성별이 무엇인가요?</p>
                        <select name="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="woman">여성</option>
                            <option value="man">남성</option>
                            <option value="non-binary">논바이너리</option>
                            <option value="none">답변하고 싶지 않음</option>
                            <option value="etc">기타</option>
                        </select>
                    </div>
                    <span className="msg"></span>
                    <button className="next_btn" onClick={handleNext}>
                        다음
                    </button>
                </section>

            {/* Step 6 */}            

            <section className={`${getSectionClassName(6)}`} id="step6">

                    <div className="title">
                    <i className="prev_btn fa-solid fa-chevron-left" onClick={handlePrev} />
                        <p>계정 만들기</p>
                    </div>
                    <div className="user_email">
                        <p className="explane">이름이 무엇인가요?</p>
                        <div className="name_input">
                            <input type="text" name="name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <span className="msg">Spotify 프로필에 표시됩니다.</span>
                    <button id="signup_btn" onClick={handleSignup}>
                        계정 만들기
                    </button>
                </section>
        </div>
    );
};

export default Signup;
