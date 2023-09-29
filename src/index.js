import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import { store } from './store';
import GlobalStyles from './components/GlobalStyles';
import { theme } from './components/GlobalStyles/ChakraTheme/theme';

// const theme = extendTheme({
//   styles: {
//     global: {
//       // styles for the `body`
//       body: {
//         bg: '#170f23',
//         color: '#fff',
//         fontFamily: 'Inter, sans-serif',
//       },
//       // styles for the `a`
//       a: {
//         color: 'teal.500',
//         _hover: {
//           textDecoration: 'none',
//         },
//       },
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GlobalStyles>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </GlobalStyles>
  </Provider>,
);
