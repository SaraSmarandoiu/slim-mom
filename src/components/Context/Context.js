
import { createContext } from 'react';

export const ThemeContext = createContext();

const body = document.querySelector('body');

export const ThemeContextProvider = ({ children }) => {

  return (
    <ThemeContext.Provider
    >
      {children}
    </ThemeContext.Provider>
  );
};
