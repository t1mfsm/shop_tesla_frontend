import './App.css'
import Header from './components/Header/Header'
import './styles/null.css'
import './styles/style.css'

import HomePage from './pages/HomePage/HomePage'

import { Routes, Route, useLocation } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage/DetailsPage'
import DetailPage from './pages/DetailPage/DetailPage'
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'



const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />

      {/* Условно рендерим Breadcrumbs ниже Header, но только на страницах, кроме главной */}
      {location.pathname !== '/' && <Breadcrumbs />}

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App