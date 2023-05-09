import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #f1f1f1;
  color: ${(props) => (props.theme === 'light' ? 'blue' : 'red')};
  display: flex;
  justify-content: space-around;
`;

function Main(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Wrapper theme={theme}>
      <h3>Main</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </Wrapper>
  );
}

export default Main;
