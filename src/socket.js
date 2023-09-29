import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
// const URL = 'http://localhost:9000';
const URL = 'https://61c4-14-160-26-214.ngrok.io';

const token = localStorage.getItem('access_token');

export const initSocket = () => {
  try {
    const socket = io(URL, {
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return socket;
  } catch (error) {
    console.log(error);
  }
};
