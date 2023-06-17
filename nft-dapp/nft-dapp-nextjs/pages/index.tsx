import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import styled from '@emotion/styled';
import { MenuView, Title } from '../components';
import { Button } from '@mui/material';

const Home: NextPage = () => {
  return (
    <MainView>
      <MenuView>
        <Title>CryptoSpace</Title>
        <MenuButton variant="outlined" size="large">
          Minting Your Own Planet
        </MenuButton>
        <MenuButton variant="outlined" size="large">
          View All Planets
        </MenuButton>
      </MenuView>
    </MainView>
  );
};

const MainView = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuButton = styled(Button)`
  margin: 10px 0;
`;

export default Home;
