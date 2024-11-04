import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import Layout from './components/Layout';
import StateSelection from './components/StateSelection';
import TestCategories from './components/TestCategories';
import TestPage from './components/TestPage';
import Contact from './components/Contact';
import About from './components/About';
import SchemaTest from './components/SchemaTest';
import SchemaDebug from './components/SchemaDebug';

export default function App() {
  return (
    <BrowserRouter>
      <SchemaTest />
      <SchemaDebug />
      <ErrorBoundary>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<StateSelection />} />
            <Route path="/state/:state" element={<TestCategories />} />
            <Route path="/state/:state/:category/:testId" element={<TestPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}