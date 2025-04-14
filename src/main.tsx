import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { KeycloakProvider } from './auth/KeycloakProvider';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppRoute } from './routes/AppRoute';
import Home from './pages/Home';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KeycloakProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={AppRoute.Home} />} />
          <Route path={AppRoute.Home} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </KeycloakProvider>
  </StrictMode>
);
