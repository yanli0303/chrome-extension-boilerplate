import React from '../../meta/pkg/react.js';
import { useAppSelector } from '../app/store.js';
import Header from '../components/Header.js';
import { selectAppSettings } from '../features/app/index.js';
const Home = () => {
  const settings = useAppSelector(selectAppSettings);
  return /* @__PURE__ */ React.createElement(Header, {
    serverUrl: settings.serverUrl || 'Hello world',
  });
};
export default Home;
