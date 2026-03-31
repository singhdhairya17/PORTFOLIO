import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import ScrollPage from './pages/ScrollPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ScrollPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
