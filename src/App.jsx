
import './VerticalText.css'
import './App.css'
import AppRoutes from './AppRoutes';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        
        })}
      </Routes>
      <VerticalText/>
    </Layout>
  );
}

function VerticalText() {
  return (
    <div className="vertical-text-container">
      <div className="vertical-text">FRAG INFINITY</div>
    </div>
  );
}

export default App;
