import React from 'react';
import { useAppSelector } from '../app/store';
import Header from '../components/Header';
import { selectAppSettings } from '../features/app';

const Home = () => {
  const settings = useAppSelector(selectAppSettings);
  return <Header serverUrl={settings.serverUrl || 'Hello world'} />;
};

export default Home;
