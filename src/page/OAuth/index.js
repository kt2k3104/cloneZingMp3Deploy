import { useSearchParams } from 'react-router-dom';

function OAuth() {
  const [searchParam] = useSearchParams();

  localStorage.setItem('access_token', searchParam.get('access_token'));
  localStorage.setItem('refresh_token', searchParam.get('refresh_token'));
  window.close();

  return <div></div>;
}

export default OAuth;
