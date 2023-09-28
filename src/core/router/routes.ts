import { generatePath } from 'react-router-dom';

interface BaseRoutes {
  root: string;
  login: string;
  coins: string;
  seeCoin: string;
}

const baseRoutes: BaseRoutes = {
  root: '/',
  login: '/login',
  coins: '/coins',
  seeCoin: '/coin/:id',
};

interface Routes extends Omit<BaseRoutes, 'seeCoin'> {
  seeCoin: (id?: string) => string;
}

export const routes: Routes = {
  ...baseRoutes,
  seeCoin: id =>
    id ? generatePath(baseRoutes.seeCoin, { id }) : baseRoutes.seeCoin,
};
