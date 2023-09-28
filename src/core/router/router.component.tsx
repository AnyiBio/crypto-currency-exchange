import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthRoute } from 'common-app/auth';
import { routes } from './routes';
import {
  LoginScene,
  CoinScene,
  CoinsScene
} from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.root} element={<CoinsScene />} />
        <Route path={routes.login} element={<LoginScene />} />
        <Route path={routes.seeCoin()} element={<CoinScene />} />
      </Routes>
    </HashRouter>
  );
};
