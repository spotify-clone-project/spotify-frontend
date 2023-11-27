import axios from 'axios';

// Axios 인스턴스 생성
const Api = axios.create({
    baseURL: '/api' // 기본 URL 설정
});

// 요청 인터셉터 설정
Api.interceptors.request.use(
    (config) => {
        // 로컬 스토리지에서 토큰을 가져옵니다.
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            // 요청 헤더에 토큰을 추가합니다.
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        // 요청 에러 처리
        return Promise.reject(error);
    }
);

Api.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true; // 재시도 플래그 설정
  
        try {
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            const response = await fetch('/api/auth/refresh', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${refreshToken}`,
                'Content-Type': 'application/json'
              },
            });
  
            if (!response.ok) {
              // 리프레시 토큰 요청 실패 처리 (예: 로그아웃)
              // ...
              return Promise.reject(error);
            }
  
            const data = await response.json();
            const newAccessToken = data.accessToken;
  
            localStorage.setItem('accessToken', newAccessToken);
            originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            return axios(originalRequest);
          }
        } catch (refreshError) {
          // 리프레시 토큰 요청 중 에러 처리
          // ...
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
  
  

export default Api;
