import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import { routerBasename } from './lib/routerBase';

export default function App() {
  return (
    <BrowserRouter basename={routerBasename()}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/contato"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
