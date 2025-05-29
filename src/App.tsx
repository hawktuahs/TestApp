import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Productivity from './pages/Productivity';
import Faith from './pages/Faith';
import Health from './pages/Health';
import Emotional from './pages/Emotional';
import Finance from './pages/Finance';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/productivity" element={<Productivity />} />
            <Route path="/faith" element={<Faith />} />
            <Route path="/health" element={<Health />} />
            <Route path="/emotional" element={<Emotional />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
