import React, { useState } from 'react';
import style from '../css/Login.css';
import { useNavigate } from 'react-router-dom'; 
import Api from '../Api'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Axios의 post 메소드를 사용하여 로그인 요청을 보냅니다.
      const response = await Api.post('/auth/login', {
        email,
        password,
      });

      // Axios의 응답은 자동으로 JSON 형태로 파싱됩니다.
      const { accessToken, refreshToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // 로그인 성공 후 navigate를 사용하여 경로 이동
      navigate('/home'); // 대시보드 페이지로 이동
    } catch (error) {
      // Axios 오류 처리
      if (error.response) {
        // 서버에서 응답이 반환된 경우
        const { message } = error.response.data;
        setErrorMessage(message || '로그인에 실패하였습니다.');
      } else {
        // 요청이 제대로 이루어지지 않은 경우
        console.error('Login failed', error);
        setErrorMessage('로그인 중 오류가 발생하였습니다.');
      }
    }
  };

  const togglePasswordVisibility = () => {
    const passwordInput = document.querySelector('input[name="password"]');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  };

  return (
    <div className={`wrap ${style}`}>
      <div className="login_top">
        <i className="prev_btn fa-solid fa-chevron-left" onClick={() => navigate(-1)} />
        <p>로그인하기</p>
      </div>
      <form onSubmit={handleLogin}>
        <div className="login_form">
          <div className="user_email">
            <p>이메일 또는 사용자 이름</p>
            <div className="email_input">
              <input type="text" name="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="user_password">
            <p>비밀번호</p>
            <div className="password_input">
              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <i className="fa-regular fa-eye" style={{ color: '#ffffff' }} onClick={togglePasswordVisibility} />
            </div>
          </div>
          <span id="error_msg">{errorMessage}</span>
        </div>
        <button type="submit" className="login_btn">
          로그인하기
        </button>
      </form>
      <button className="nopassword_login">
        <a href="#">비밀번호 없이 로그인하기</a>
      </button>
    </div>
  );
};

export default Login;
