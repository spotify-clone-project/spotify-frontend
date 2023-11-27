import React, { useState } from 'react';
import style from '../css/Login.css';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // useNavigate를 사용하여 네비게이션 함수를 가져옵니다.
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.accessToken;
        const refreshToken = data.refreshToken;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        
        // 로그인 성공 후 navigate를 사용하여 경로 이동
        // navigate('/dashboard'); // 대시보드 페이지로 이동
        console.log(data);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || '로그인에 실패하였습니다.');
      }
    } catch (error) {
      console.error('Login failed', error);
      setErrorMessage('로그인 중 오류가 발생하였습니다.');
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
