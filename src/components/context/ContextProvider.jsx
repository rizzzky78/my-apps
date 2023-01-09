import React, { createContext, useContext, useState } from 'react'

const MyContext = createContext();

const ContextProviders = ({ children }) => {

  const [currentColorTheme, setCurrentColorTheme] = useState('');
  const [themeMode, setThemeMode] = useState('light');

  const setMode = (e) => {
    setThemeMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColorTheme(color);
    localStorage.setItem('colorMode', color);
  };

  return (
    <MyContext.Provider value={{ currentColorTheme, themeMode, setMode, setColor }}>
      {children}
    </MyContext.Provider>
  );
};

const useStateContext = () => useContext(MyContext);

export { ContextProviders, useStateContext }