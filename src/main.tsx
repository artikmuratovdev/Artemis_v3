import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme/theme.ts';

createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </StrictMode>
  </ChakraProvider>
);
