/**
 * Cadastre as rotas da sua aplicação!
 * Lembrando: a estrutura do objeto que configura a rota é a seguinte:
 *
 * {
 *   path: "/caminho-da-rota",
 *   element: <ComponenteDaRota />,
 * }
 */

import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/Home';
import { QuemSou } from './pages/QuemSou';
import { PaginaErro } from './pages/PaginaErro';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/quemsou', element: <QuemSou /> },
      { path: '*', element: <PaginaErro /> }, // Rota de erro 404
    ],
  },
]);

