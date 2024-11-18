import './App.css';
import AppRoutes from './AppRoutes';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './component/Layout';
import ComingSoonPage from './Pages/ComingSoonPage';

function App() {
  const location = useLocation();

  const isComingSoon = location.pathname === '/coming-soon';
  let isNotFound = AppRoutes.every((route) => route.path !== location.pathname);
  if(location.pathname == '/') isNotFound = false;

  return (
    <>
      {isComingSoon ? (
        <ComingSoonPage />
      ) : (
        <Layout noFooter={isNotFound}>
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
