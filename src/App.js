import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import { publicRoutes } from '~/routes';
import { useDispatch, useSelector } from 'react-redux';

import { DefaultLayout } from '~/layouts';
import { getSongs } from './layouts/components/PlayerControls/ListenSlice';
import { getPlaylists, handleInitLogin } from './page/Auth/UserSlice';

function App() {
  const { isLogined } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleGetSongs = async () => {
      try {
        await dispatch(getSongs()).unwrap();
      } catch (error) {
        console.log(error);
      }
    };
    handleGetSongs();

    const handleCheckedUserLogin = () => {
      if (localStorage.getItem('access_token')) {
        dispatch(handleInitLogin());
      }
    };
    handleCheckedUserLogin();
  }, [dispatch, isLogined]);

  useEffect(() => {
    const handleGetPlaylist = () => {
      if (isLogined) {
        dispatch(getPlaylists());
      }
    };
    handleGetPlaylist();
  }, [dispatch, isLogined]);

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
