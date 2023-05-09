import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import Main from './Main';

function LightDarkMode(props) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Main />
    </ThemeContext.Provider>
  );
}

export default LightDarkMode;
