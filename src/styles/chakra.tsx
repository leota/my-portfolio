import {
    ChakraProvider,
    ColorModeScript,
    cookieStorageManager,
  } from '@chakra-ui/react';
  
  import customTheme from './theme';
  
  type ChakraProps = {
    children: React.ReactNode;
  };
  
  export const Chakra = ({ children }: ChakraProps) => {
    return (
      <>
        <ColorModeScript
          initialColorMode={customTheme.config?.initialColorMode}
          type='cookie'
        />
        <ChakraProvider
          colorModeManager={cookieStorageManager}
          theme={customTheme}
        >
          {children}
        </ChakraProvider>
      </>
    );
  };