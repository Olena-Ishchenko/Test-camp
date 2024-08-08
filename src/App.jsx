import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';

const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage'));

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
