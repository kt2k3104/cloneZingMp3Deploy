import axios from 'axios';

export default function requestApi(endpoint, method, body, responseType = 'json') {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  if (body instanceof FormData) {
    headers['Content-Type'] = 'multipart/form-data';
  }

  const instance = axios.create({ headers });

  instance.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem('access_token');
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalConfig = error.config;
      if (error.response && error.response.status === 419) {
        try {
          const refreshToken = localStorage.getItem('refresh_token');
          if (!refreshToken) {
            throw new Error('Refresh token not found');
          }
          const result = await instance.post(
            `http://localhost:9000/auth/refresh-token`,
            {
              refresh_token: refreshToken,
            },
            {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            },
          );
          const { access_token: new_access_token, refresh_token: new_refresh_token } =
            result.data.result;

          localStorage.setItem('access_token', new_access_token);
          localStorage.setItem('refresh_token', new_refresh_token);

          originalConfig.headers['Authorization'] = `Bearer ${new_access_token}`;

          return instance(originalConfig);
        } catch (err) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          console.log('err', err);
          return Promise.reject(err);
        }
      }
      return Promise.reject(error);
    },
  );

  return instance.request({
    method: method,
    url: `${process.env.REACT_APP_API_URL}${endpoint}`,
    data: body,
    responseType: responseType,
  });
}
